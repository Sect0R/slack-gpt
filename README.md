
# Node.js Slack bot with ChatGPT 3.5

This is a Node.js Slack app that works with ChatGPT 3.5 to provide AI-powered responses to messages.     
The app listens for mentions in channels and uses ChatGPT to generate a response, which is then posted back to the channel as a message.

## Prerequisites

Before you start, make sure you have the following:

- A Slack workspace
- Node.js installed on your machine
- A registered Slack app with the Slack Bot Token and Slack App Token
- An OpenAI API key

### Step 1: Register an app with Slack and obtain tokens

To integrate ChatGPT with Slack, you need to register an app with Slack and obtain the Slack Bot Token and Slack App Token. Follow these steps to do so:

1. Log in to your Slack workspace.
2. Go to the [Slack API website](https://api.slack.com/).
3. Click on "Create an app" and select "From scratch".
4. Give your app a name and select your Slack workspace.
5. In "Basic information", go to "Add features and functionality". Click on "Permissions" and add the following scopes under "Bot Token Scopes":
    - `app_mentions:read`
    - `channels:history`
    - `channels:read`
    - `chat:write`
6. In "Settings", click on "`Socket Mode`", enable it, and give the token a name. Copy the Slack Bot App Token (starts with `xapp-`).
7. In "Basic information", go to "Add features and functionality". Click on "Event Subscriptions" and enable it. Under "Subscribe to bot events", select "`app_mention`". Save changes.
8. Go to the "OAuth & Permissions" section and install your app to your workspace.
9. Copy the Slack Bot Token (starts with xoxb).

### Step 2: Obtain the OpenAI API key

To use OpenAI's GPT-3 API, you need to obtain an API key. Here's how:

1. Go to the [OpenAI API website](https://beta.openai.com/).
2. Log in or sign up for an OpenAI account.
3. Go to the "API Key" section and create a new API key.
4. Copy the API key.

## Getting started

To use this app, you'll need to have Node.js and npm installed on your computer. You'll also need to create a Slack app and obtain a bot token and an app token. Finally, you'll need to sign up for the OpenAI API and obtain an API key.

To get started, clone this repository and install the dependencies:

```bash  
git clone https://github.com/Sect0R/slack-gpt.git  
cd slack-gpt  
npm install  
```  

Next, create a `.env` file in the root directory of the project with the following contents:

```env
# "error", "warn", "info", "debug"  
LOG_LEVEL=warn  
  
SLACK_BOT_TOKEN=your-bot-token  
SLACK_APP_TOKEN=your-app-token  
SLACK_SEND_AS_THREAD=0|1  
SLACK_SIGNING_SECRET=your-signing-secret  
  
OPENAI_API_KEY=your-api-key
```  

Replace `your-bot-token`, `your-app-token`, `your-signing-secret`, and `your-api-key` with your actual tokens and API key. The `LOG_LEVEL` and `SLACK_SEND_AS_THREAD` variables are optional and can be used to set the logging level and control whether messages are sent as threads, respectively.

Finally, start the app:

```  
npm start  
```  

The app should now be running and listening for events.

## Usage

To use the app, simply mention the bot in a channel and provide a prompt for ChatGPT. For example:

```  
@my-bot What is the meaning of life?  
```  

The bot will then use ChatGPT to generate a response and post it back to the channel.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
