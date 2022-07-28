## Ordinal Numbers

The numbers which give us the exact position of an object are called ordinal numbers. Ordinal numbers tell the position of an object rather than their quantity. 

#### Functionality

Returns a number with an additional extension, eg: `1st`, `2nd`, `3rd`, and so on.

#### Example Usage

`JavaScript`

```js
const { Client, Intents, MessageEmbed } = require('discord.js');

const { ordinal } = require('./src/index');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

client.on('guildMemberAdd', (member) => {
	const embed = new MessageEmbed()
		.setColor('RANDOM')
		.setTitle('Example embed title')
		.setDescription(`Member joined, you are the ${ordinal(member.guild.memberCount)} member.`)
		.setTimestamp();
});
```

`TypeScript`

```js
import { Client, Intents, type APIEmbed, type GuildMember } from 'discord.js';

import { ordinal } from './src/index';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});

client.on('guildMemberAdd', (member: GuildMember) => {
	const embed: APIEmbed = {
		color: 'RANDOM',
		title: 'Example embed title',
		description: `Member joined, you are the ${ordinal(member.guild.memberCount)} member.`,
		timestamp: new Date().toISOString(),
	};
});
```

#### Resulting Code

As you can see here, we use a powerful library [discord.js](http://discord.js.org/) of [Node.js](https://nodejs.org/en/), you'll see that we pass in the parameter of `ordinal()` function `member.guild.memberCount` because it returns a number, and `ordinal()` function will only work to a returning number in any code base or functions.
