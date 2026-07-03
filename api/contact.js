// api/contact.js
//
// Vercel Serverless Function. Receives the contact form POST from the
// browser and forwards it to a Discord webhook. The webhook URL is NEVER
// present in any frontend file — it is read here from the environment
// variable DISCORD_WEBHOOK_URL, which you set in the Vercel dashboard
// (Project > Settings > Environment Variables).

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set in the Vercel environment.');
    res.status(500).json({ error: 'Server is not configured.' });
    return;
  }

  let data = req.body;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch (e) { data = {}; }
  }
  data = data || {};

  const name = String(data.name || '').trim().slice(0, 200);
  const subject = String(data.subject || '').trim().slice(0, 200);
  const message = String(data.message || '').trim().slice(0, 2000);
  const contactMethod = String(data.contactMethod || '').trim().slice(0, 100);

  if (!name || !subject || !message || !contactMethod) {
    res.status(400).json({ error: 'Missing fields.' });
    return;
  }

  const payload = {
    embeds: [{
      title: 'New portfolio contact message',
      color: 0x7b61ff,
      fields: [
        { name: 'Name', value: name, inline: true },
        { name: 'Subject', value: subject, inline: true },
        { name: 'Discord to reply to', value: contactMethod, inline: true },
        { name: 'Message', value: message }
      ],
      timestamp: new Date().toISOString()
    }]
  };

  try {
    const discordRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!discordRes.ok) {
      const text = await discordRes.text();
      console.error('Discord webhook error:', discordRes.status, text);
      res.status(502).json({ error: 'Discord rejected the message.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to reach Discord webhook:', err);
    res.status(502).json({ error: 'Could not reach Discord.' });
  }
};
