const {App, LogLevel} = require('@slack/bolt');
const {WebClient} = require('@slack/web-api');
const { Configuration, OpenAIApi } = require("openai");
const repl = require('repl');

require('dotenv').config({
    path: __dirname + '/.env',
});

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Slack App & Event API
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
    logLevel: LogLevel.INFO,
});

const client = new WebClient(process.env.SLACK_BOT_TOKEN);

// This gets activated when the bot is tagged in a channel
app.event('app_mention', async ({event}) => {
    console.log(event.text);

    // Create prompt for ChatGPT
    const prompt = event.text.split('>')[1];

    const chatGptResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    const reply = chatGptResponse.data.choices[0].text;

    // Reply to thread
    await client.chat.postMessage({
        channel: event.channel,
        thread_ts: event.ts,
        text: reply.trim(),
    });
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();

// slackEvents.start();
