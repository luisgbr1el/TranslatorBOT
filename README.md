# Translator

<img src="https://cdn.discordapp.com/avatars/745021822361141278/a9cb162b2aede254ed53484f40c1ba42.png?size=2048" alt="logo-translatorbot" border="0" width="200px">

[![GitHub forks](https://img.shields.io/github/forks/luisgbr1el/translatorbot?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/network)
[![GitHub stars](https://img.shields.io/github/stars/luisgbr1el/translatorbot?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/stargazers)
[![GitHub license](https://img.shields.io/github/license/luisgbr1el/translatorbot?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/luisgbr1el/translatorbot?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/issues)

Hey there! I'm **Translator**. I'm a Discord Bot and I can translate and convert values/texts.
> Fully compatible with **Slash commands <img src="https://cdn3.emoji.gg/emojis/6243-blurple-slashcommands.png" width="20px">**.

- [Website](https://translatorbot.gitbook.io)
- [Dashboard](https://translatorgg.herokuapp.com)

## Resources
<img  alt="Luis-Node" src="https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white"> <img  alt="Luis-NPM" src="https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=white"> <img  alt="Luis-JS" src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white">

- Node.js 
- NPM
- JavaScript

## Emojis meanings
We use emojis on commits names to represent what we did. So below is a table with their meanings.
|Emoji|Meaning|
|-|-|
|🆕|New function, file, condition, etc.|
|♻|Updating code, packages or recycling code|
|✅|Issue fixed successfully, PR merged|
|❌|Error to fix issue, code/file/folder removed|
|🔧|Code block fixed/corrected|

## Bot commands
View below bot commands and how to use each one.
|Command|Type|Description|Example|
|-|-|-|-|
|`/translate`|Slash command|Translate text from a language to another.|`/translate <from:en> <to:pt> <text:Hey there!>`|
|`/t`|Slash command|Auto translate text to a language.|`/t <to:en> <text:Bom dia!>`|
|`/convert`|Slash command|Convert values/texts to various formats.|`/convert <type:Convert to> <format:Roman numeral> <content:13>`|
|`/help`|Slash command|View bot guide and info.|`/help`|
|`Translate message`|Message Context Menu|Translate any message.|Right-click on a message > Apps > Translate message|

## Build
To compile this project in your PC. Follow this steps:

### 1. Cloning repository
Initially, you need to clone this repository. If you're using **Git**, in console, type:
```git
git clone https://github.com/luisgbr1el/TranslatorBOT.git
```

### 2. Installing packages
To run the bot, you need to install all the required packages, listed in `package.json` file.


So when finish the cloning, open a terminal in `/TranslatorBOT` folder and type:
```node
npm install
```

### 3. Token
To the bot authentication, you need to request a token to the bot in [Discord Developers](https://discord.com/developers/applications).

Create a bot, copy token and paste in [index.js](https://github.com/luisgbr1el/TranslatorBOT/blob/main/index.js) last line. In this part:
```js
client.login(token);
```

### 4. Starting
To init the bot execution, you need to open a terminal in project's folder, so...

#### With Node.js
```node
node index.js
```


### 5. YES!
That's a wrap! Now the bot is online.

## Contribute
You can contribute to the project creating a [Pull Request](https://github.com/luisgbr1el/TranslatorBOT/pulls). If you don't know how to, follow the steps below:

### 1. Doing a fork
A *fork* is basically a repository copy, but yours.

To create a new one, click on **Fork** button, in above menu. The button look like this:

![image](https://user-images.githubusercontent.com/62726888/155862651-8be8c9c2-437a-4551-a956-ee726c683272.png)

### 2. Cloning your fork
Now, you can clone your fork to your PC and make the changes.

Do this how you want.

### 3. Do your changes

Modify the code, but turn it better. Any unnecessary *Pull Request* will be closed.

### 4. Create a Pull Request
1. To do a Pull Request, go to the [pulls](https://github.com/luisgbr1el/TranslatorBOT/pulls) tab and click in *New Pull Request*.
2. Select **this** repository as `base` and your fork as `compare`.
3. Do a sinopsis of your changes with *Markdown* and click in *Create Pull Request*.

Your contribution will be verified by me and if it's right, you'll be a member of this project!

## Repository contributors
<a href = "https://github.com/luisgbr1el/TranslatorBOT/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=luisgbr1el/TranslatorBOT"/>
</a>
