"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownCommand = {
    name: "markdown",
    desc: "Link to the discord markdown help page",
    usage: "markdown",
    aliases: ["markdown101"],
    useDefaultPrefix: true,
    adminOnly: false,
    async execute(msg) {
        await msg.channel.send("https://support.discordapp.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-");
    },
};
exports.SpoilerCommand = {
    name: "spoiler",
    desc: "Link to the discord spoiler help page",
    usage: "spoiler",
    aliases: ["spoilers", "mspoiler"],
    useDefaultPrefix: true,
    adminOnly: false,
    async execute(msg) {
        await msg.channel.send("https://support.discordapp.com/hc/en-us/articles/360022320632-Spoiler-Tags-");
    },
};
exports.MobileSpoilerCommand = {
    name: "mobilespoiler",
    desc: "Information on how to send an spoiler image on mobile",
    usage: "mobilespoiler",
    aliases: ["mobile", "mspoiler"],
    useDefaultPrefix: true,
    adminOnly: false,
    async execute(msg) {
        await msg.channel.send(`\`\`\`Adding Spoiler tag on images on mobile
- Rename the file \`\`SPOILER_\`\`
-- rename, not add notes or caption 
-- SPOILER need needs to all caps
- EX: \`\`SPOILER_test\`\` \`\`\`
https://support.discordapp.com/hc/en-us/community/posts/360040470332-Image-spoiler-for-mobile`);
    },
};
//# sourceMappingURL=MarkdownCommand.js.map