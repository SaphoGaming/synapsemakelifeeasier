 /**
 * @name SynapseMakeLifeEasier
 * @author yorker
 * @description makes life easier for a monke. 
 * @version 3.8.2
 * @authorId 844997173790769183
 */

  if (!global.ZeresPluginLibrary) {
    BdApi.showConfirmationModal("Library Missing", `The library plugin needed for SynapseMakeLifeEasier is missing. Please click Download Now to install it.`, {
        confirmText: "Download Now",
        cancelText: "Cancel",
        onConfirm: () => {
            require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                if (error) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
            });
        }
    });
}

  
const config = {
    info: {
        name: "SynapseMakeLifeEasier",
        authors: [
            {
                name: "Yorker",
                discord_id: "844997173790769183",
            }
        ],
        version: "3.8.2",
        description: "makes staffing easier",
        github: "https://github.com/SaphoGaming/synapsemakelifeeasier/blob/main/SynapseMakeLifeEasier.plugin.js",
        github_raw: "https://raw.githubusercontent.com/SaphoGaming/synapsemakelifeeasier/main/SynapseMakeLifeEasier.plugin.js"
    },
    changelog: [
        {
            "title": "Changes",
            "type": "Changes",
            "items": [
                "**my cousin wishes he wasn't related to me so he could see me bounce my ass at full capacity**",
            ]
        },
    ]
};

class Dummy {
    constructor() {this._config = config;}
    start() {}
    stop() {}
}
  
module.exports = !global.ZeresPluginLibrary ? Dummy : (([Plugin, Api]) => {
    const plugin = (Plugin, Library) => {
        const {
            Logger,
            WebpackModules,
            PluginUpdater,
            Patcher,
          } = Library;

        PluginUpdater.checkForUpdate("SynapseMakeLifeEasier", config.info.version, "https://raw.githubusercontent.com/SaphoGaming/synapsemakelifeeasier/main/SynapseMakeLifeEasier.plugin.js")

        const DiscordCommands = BdApi.Webpack.getModule(m => Array.isArray(m) && m.some(e => e?.applicationId) && m.some(e => e?.execute) && m.some(e => e?.inputType));
        const FluxDispatcher = BdApi.findModuleByProps('dispatch', 'subscribe')
        const clipboard  = BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("clipboard")).clipboard
        let { lastMessageId } = BdApi.findModuleByProps("lastMessageId")
        let { getMessage, getMessages } = BdApi.findModuleByProps("getMessage", "getMessages")
        let moment = BdApi.findModuleByProps("locale")
        let { sendBotMessage } = BdApi.findModuleByProps("sendBotMessage")
        let dispatchStore = BdApi.findModuleByProps("dispatch", "subscribe")
        let dirtyDispatch = dispatchStore.dispatch.bind(dispatchStore)
        // const { showToast } = BdApi.findModuleByProps("showToast")
        // const AchievementToast = BdApi.findModuleByDisplayName("AchievementToast")
        let {fetchForGuild, fetchForChannel} = BdApi.findModuleByProps("fetchForGuild", "fetchForChannel")
        let { createElement: ce } = BdApi.React
        let { fetchMessages } = BdApi.findModuleByProps("fetchMessages", "_tryFetchMessagesCached")
        let { getChannel } = BdApi.findModuleByProps("hasChannel", "getChannel")
        let { getUser } = BdApi.findModuleByProps("getUser")
        const ComponentDispatcher = BdApi.Webpack.getModule((module) => {
            if (module.dispatchToLastSubscribed !== undefined) {
              return module.emitter.listeners('SHAKE_APP').length > 0
            }
          
            return false
          }, { searchExports: true })
        const SlashCommandStore = WebpackModules.getModule(
            (m) => m?.Kh?.toString?.()?.includes?.("BUILT_IN_TEXT")
          );

        const inviterequest = '1068000174196138036'
        const channelId = '1068000174196138036'; 
        const botId = '910740766765223986'; 
        const userid = BdApi.findModuleByProps("getCurrentUser").getCurrentUser().id; // auto get userID
        
        
        let recentBotMsg = '';
        let recentBotMsg2 = '';
        let recentBotMsg3 = '';
        const currBotMsg = '';
        
        const MessageCreators = BdApi.Webpack.getModule(m => m.sendBotMessage);
        const MessageActions = BdApi.findModuleByProps("receiveMessage");
        const AvatarDefaults = BdApi.findModuleByProps("BOT_AVATARS");

        
        let currChannel = '';
        
        let proceed = false;
        
        
        function handleSubmit(e) {
            e.preventDefault();
            console.log('You clicked submit.');
            
        }
        
        function Component(props) {
            return ce("div", {style: {
                position: "relative",
                display: "block",
                color: "white",
                top: "5vh",
                left: "80vh",
                border: "2px solid #202225",
                borderRadius: "20px",   
                padding: "50px",
                background: "#36393f",
            }}, [ce("button", {style: {
                width: "70px",
                color:"white", 
                borderRadius:"10px", 
                padding:"10px 10px 10px", 
                background:"#202225", 
                position:"relative", 
                left:"-30px", 
                top:"45px",
            
            }, onClick:handleSubmit}, "Click me")]);
                
        
            
            
        }
        
        function newDate(date) {
            switch(date) {
                case "00": return "12";
                case "23": return "11";
                case "22": return "10";
                case "21": return "9";
                case "20": return "8";
                case "19": return "7";
                case "18": return "6";
                case "17": return "5";
                case "16": return "4";
                case "15": return "3";
                case "14": return "2";
                case "13": return "1";
                case "12": return "12";
                case "11": return "11";
                case "10": return "10";
                case "09": return "9";
                case "08": return "8";
                case "07": return "7";
                case "06": return "6";
                case "05": return "5";
                case "04": return "4";
                case "03": return "3";
                case "02": return "2";
                case "01": return "1";
                default: return date;
                
            }
        }
        
        function amORpm(date) {
            switch(date) {
                case "00": return "AM";
                case "23": return "PM ";
                case "22": return "PM";
                case "21": return "PM";
                case "20": return "PM";
                case "19": return "PM";
                case "18": return "PM";
                case "17": return "PM";
                case "16": return "PM";
                case "15": return "PM";
                case "14": return "PM";
                case "13": return "PM";
                case "12": return "PM";
                case "11": return "AM";
                case "10": return "AM";
                case "09": return "AM";
                case "08": return "AM";
                case "07": return "AM";
                case "06": return "AM";
                case "05": return "AM";
                case "04": return "AM";
                case "03": return "AM";
                case "02": return "AM";
                case "01": return "AM";
                default: return date;
                
            }
        }
        
        CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
            if (w < 2 * r) r = w / 2;
            if (h < 2 * r) r = h / 2;
            this.beginPath();
            this.moveTo(x+r, y);
            this.arcTo(x+w, y,   x+w, y+h, r);
            this.arcTo(x+w, y+h, x,   y+h, r);
            this.arcTo(x,   y+h, x,   y,   r);
            this.arcTo(x,   y,   x+w, y,   r);
            this.closePath();
            return this;
            }
        
        
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        
        function createImage(imgSrc, ctx) {
            var imgCenter = new Image();
            imgCenter.onload = function () {
                var drawFn = function (ctx) {
                    ctx.beginPath();
                    ctx.arc(40,40,25,0,Math.PI*2,true);
                    ctx.closePath();
                    ctx.clip();
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(img, 15, 15, 50, 50);
                };
                img.setAttribute('crossOrigin','anonymous');
                img.src = imgSrc;
                drawFn(ctx)
            }
        }


        
        function checkForFix(msg){
            var responseF = ``
            switch (msg) {
                case "crashinject": 
                    responseF = `
        Try the fixes I provide below:
        
        - Fix 1: Reinstall ROBLOX & Synapse
        - Fix 2: Check for any antivirus software that you may have, common suspects include McAfee, Kaspersky, Bitdefender & Avast. It is recommended for you to uninstall as this software can cause Synapse to have issues even when "disabled".
        - Fix 3:  Download & install malwarebytes and do a full scan. Then hit quarantine and restart your PC as prompted. There could be malware preventing Synapse from working.
        - Fix 4 (last resort): Create a new administrative account on your PC.`
        
                break;
                case "invite":
                    responseF = `
        Try the fix provided below:
        Turn on "Discord AutoJoin" in Options.
        Delete discord.bin and discordtb.bin found inside of the auth folder, then run Synapse as Administrator
        Make sure your antivirus is turned off`
                break;
                case "updated":
                    responseF = `
        ROBLOX updates usually occur on wednesdays and Synapse may be outdated. Please wait patiently for Synapse to release an update.`
                break;
                case "whitelist24":
                    responseF = `
        You must wait 24 hours for your whitelist to reset.
        Alternatively, you can also privately message an administrator on our discord server.`
                break;
                case "pass":
                    responseF = `
        To do this:
        Delete your token.bin file in your /auth/ folder. Restart Synapse X and click "Lost your password".
        Follow the on-screen instructions to reset your password`
                break;
                case "internalerror":
                    responseF = `
        Try the fixes I provide below:
        
        - Fix 1. Change the time and date settings to automatic.
        - Fix 2. Change the name of the PC.`
                break;
                case "refunds":
                    responseF = `
        Per our Terms of Service and End-user License Agreement, we have a strict no refund policy.
        I. LICENSING
        (9) Licenses are to be considered irrevocably paid unless Synapse Softworks LLC judges that your
        individual condition warrants a partial refund.
        (https://x.synapse.to/contract.pdf)`
                break;
                case "uicrash":
                    responseF = `
        Try the fixes I provide below:
        
        - Fix 1: Terminate all instances of Synapse via Task Manager, delete the bin folder and run Synapse as administrator.
        - Fix 2: Make sure Synapse is installed correctly. Reinstall synapse if needed.
        - Fix 3: In rare cases, connections may be blocked by your ISP. It's recommended for you to use a VPN such as ProtonVPN (https://protonvpn.com/download).`
                break;
                case "visualstudio":
                    responseF = `
        Try the fixes I provide below:
        
        - Fix 1: Delete the bin folder located in the Synapse folder and then run Synapse as an administrator.
        - Fix 2: Download and install the x86 redist package from https://aka.ms/vs/16/release/vc_redist.x86.exe
        - Fix 3: Reinstall synapse.`
                break;
                case "stuckoninjecting":
                    responseF = `
        Try the fixes I provide below:
        
        - Fix 1: Make sure windows 10 is fully up to date.
        - Fix 2: Reinstall ROBLOX & Synapse
        - Fix 3: Check for any antivirus software that you may have, common suspects include McAfee, Kaspersky, Bitdefender & Avast. It is recommended for you to uninstall as this software can cause Synapse to have issues even when "disabled"
        - Fix 4 (last resort): Create a new user.`
                break;
                case "hacked":
                    responseF = `
        Delete your token.bin file in your /auth/ folder. Restart Synapse X and click "Lost your password".
        Follow the on-screen instructions to reset your password`
                break;
                case "accessden":
                    responseF = `
        Try the fixes I provide below:
                    
        - Fix 1: Terminate all instances of Synapse via Task Manager, delete the bin folder and run Synapse as administrator.
        - Fix 2: Make sure Synapse is installed correctly. Reinstall synapse if needed.
        - Fix 3: In rare cases, connections may be blocked by your ISP. It's recommended for you to use a VPN such as ProtonVPN (https://protonvpn.com/download).`
                break;
                case "virus":
                    responseF = `
        Synapse X does not contain any form of malware. Detections made by anti-viruses are called false-positives.`
                break;
            }
            return responseF
        }
        
        var obj = {};
          
        var regexNew = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

        let cmd = '';

        return class SynapseMakeLifeEasier extends Plugin {
            
                
            onStart() {

    

                const MESGID = document.addEventListener('keydown', this.handleKeyDown)

    


        
                let { getDMFromUserId } = BdApi.findModuleByProps("getDMFromUserId")
                let botDM = getDMFromUserId(botId)
                ZLibrary.DiscordModules.MessageActions.fetchMessages({
                    channelId: botDM, 
                    limit: 50, 
                    isPreload: undefined
                })
                ZLibrary.DiscordModules.MessageActions.fetchMessages({
                    channelId: channelId, 
                    limit: 1, 
                    isPreload: undefined
                })
                ZLibrary.DiscordModules.MessageActions.fetchMessages({
                    channelId: inviterequest, 
                    limit: 1, 
                    isPreload: undefined
                })


            Patcher.after(SlashCommandStore, "Kh", (_,args, res) => {
                res.push({
                    __registerId: "bot2",
                    applicationId: "betterdiscord",
                    name: "ss",
                    displayName: "ss",
                    description: "screenshot",
                    displayDescription: "screenshot",
                    id: "bot-synapse2",
                    type: 1,
                    target: 1,
                    predicate: () => true,
                    execute: async ([args], {channel}) => {
        
                        let { getDMFromUserId } = BdApi.findModuleByProps("getDMFromUserId")
        
                        let botDM = getDMFromUserId(botId)
        
                        ZLibrary.DiscordModules.MessageActions.fetchMessages({
                            channelId: botDM, 
                            limit: 20, 
                            isPreload: undefined
                        })
        
                        await ZLibrary.DiscordModules.MessageActions.fetchMessages({
                            channelId: channel.id, 
                            limit: 20, 
                            isPreload: undefined
                        })
        
        
                        const regex = /([a-z0-9]){8}-([a-z0-9]){4}-([a-z0-9]){4}-([a-z0-9]){4}-([a-z0-9]){12}/g
        
                        let match3 = ''
        
                        let message3 = (getMessages(channel.id).toArray()).reverse().find((message5) => {
                            let match = regex.exec(message5?.content)
                            if (match === null) return;
                            match3 = match;
                            if (message5.author.id !== userid && message5.author.id !== "1") {
                                return message5
                            }
                        })
        
            
                    
        
                        if (message3 === undefined) {
                            MessageCreators.sendBotMessage(channel.id, ":x: Couldn't find any token :x:")
                            return;
                        }
        
                
        
                        let split = message3.timestamp._d.toString().split(" ")
                        
                        let split2 = split[4].toString().split(":")
        
                        let finaldate = split2[0];
        
                        let finaldate2 = split2[0];
        
                        
                        finaldate = newDate(finaldate);
        
                        finaldate2 = amORpm(finaldate2);
        
        
        
                        //  create ascii art from punctuation marks an image of a horse
        
                    
        
        
        
        
        
                        var canvas = document.createElement('canvas');
                        canvas.height = 80;
                        canvas.width = 572;
                        var ctx = canvas.getContext('2d');
                        ctx.fillStyle = '#36393f';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
                        let image = `https://cdn.discordapp.com/avatars/${message3.author.id}/${message3.author.avatar}.webp?size=80`
        
                        //add image
        
        
                        
        
        
                
        
                        // ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
                        const username = message3.author.username;
                        const token = match3[0];
                        const date = `${finaldate[0]}:${split2[1]} ${finaldate2}`;
                        
                        ctx.font = '18px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                        ctx.fillStyle = '#fff';
                        ctx.strokeStyle = 'black'
                        ctx.textAlign = 'left';
                        ctx.fillText(username, 90, 31);
        
                        ctx.font = '17px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                        ctx.fillStyle = '#caccce';
                        ctx.strokeStyle = 'black'
                        ctx.textAlign = 'left';
                        ctx.fillText(token, 90, 60);
        
                        // function that rounds to the nearest 10#
        
                        function round(num) {
                            return Math.ceil(num / 10) * 10;
                        }
        
                        console.log(round(Math.round(ctx.measureText(username).width)))
        
                        
                        
                        const lol = round(Math.round(ctx.measureText(username).width) + (Math.round(ctx.measureText(username).width / 100) * 4)) - 119
        
                        
                        
                        ctx.font = '14px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                        ctx.fillStyle = '#a3a6aa';
                        ctx.fillText(`Today at ${date}`, 218 + lol , 31);
        
        
                        await new Promise(r => setTimeout(r,  350));
        
                        
        
                        var img = new Image();
        
                        img.onload = () => {
                            ctx.beginPath();
                            ctx.arc(40,40,25,0,Math.PI*2,true);
                            ctx.closePath();
                            ctx.clip();
                            ctx.imageSmoothingQuality = 'high';
                            ctx.drawImage(img, 15, 15, 50, 50);
                        };
                        img.setAttribute('crossOrigin','anonymous');
                        img.src = image.toString(); 
        
                    
                        
                        await new Promise(r => setTimeout(r, 350));
                    
                        // ctx.beginPath();
                        // ctx.arc(40,40,25,0,Math.PI*2,true);
                        // ctx.fillStyle = '#36393f';
                        // ctx.fill();
                        // ctx.closePath();
                        // ctx.clip();
                        // ctx.imageSmoothingQuality = 'high';
                        // ctx.drawImage(img, 15, 15, 50, 50);
        
                        
                        try {
                            var img2 = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
                        } catch(e) {
                            var img2 = canvas.toDataURL().split(',')[1];
                        }
        
                        let readyImage = ''
        
                    
                        
                    await fetch("https://api.imgur.com/3/image/", {
                        method: "post",
                        headers: {
                            Authorization: "Client-ID 2f30b05e58882e9"
                        },
                        body: img2
                    }).then(data => data.json()).then(async data => {
                        readyImage = await data.data.link
                        readyImage += "\n"
                    })
        
                    
                    let mesg = (getMessages(botDM).toArray()).reverse().find((message2) => {
                        if (message2.embeds[0]?.rawDescription?.indexOf(match3[0]) > -1) {
                            return message2
                        }
                    })
        
                    if (mesg ===  undefined) {
                        MessageCreators.sendBotMessage(channel.id, ":x: Couldn't find token in bot DMs :x:")
                        return;
        
                    }
                    
                    var canvas2 = document.createElement('canvas');
                    canvas2.height = 420;
                    canvas2.width = 1400;
        
                    canvas2.style.width = canvas2.width / 3 + "px";
                    canvas2.style.height = canvas2.height / 3 + "px";
        
                    var ctx2 = canvas2.getContext('2d')
                
        
                    var scale = 1600/500;
                    ctx2.setTransform(scale,0,0,scale,0,0);
        
        
                    ctx2.fillStyle = '#36393f';
                    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
        
                    const regex2 = /(?!User Email)(?<=\:..).*\w+/g
        
        
                    const email = regex2.exec(mesg.embeds[0].rawDescription);
                    const ID = mesg.embeds[0].footer.text
        
        
                    if (email === null || ID === null) return;
        
        
                    ctx2.beginPath();
                    ctx2.roundRect(30, 6, 370, 120, 6);
                    ctx2.fillStyle = '#2f3136';
                    ctx2.fill();
                    ctx2.closePath()
                    ctx2.clip()
                    ctx2.font = '12px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#FFFF';
                    ctx2.textAlign = 'left';
                    ctx2.fillText("SX Bot", 45, 35);
        
        
                    ctx2.font = '10px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#DCDDDE';
                    ctx2.textAlign = 'left';
                    ctx2.fillText("Successfully sent authentication email. Please verify the following info:", 45, 56);
        
                    ctx2.font = '11px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#DCDDDE';
                    ctx2.textAlign = 'left';
                    ctx2.fillText("User Email:", 45, 85);
        
        
                    ctx2.font = '11px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#DCDDDE';
                    ctx2.textAlign = 'left';
                    ctx2.fillText("Verification Token:", 45, 100);
                    
                
                    ctx2.beginPath();
                    ctx2.roundRect(30, 6, 3.5, 160, 2.72);
                    ctx2.fillStyle = '#fff';
                    ctx2.fill();
        
                    ctx2.beginPath();
                    ctx2.roundRect(105, 75.5, ctx2.measureText(email).width - (ctx2.measureText(email).width / 10) , 13.5, 2.72);
                    ctx2.fillStyle = '#202225';
                    ctx2.fill();
        
                    ctx2.font = '9px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#fff';
                    ctx2.textAlign = 'left';
                    ctx2.fillText(email, 110, 85);
        
        
                    ctx2.beginPath();
                    ctx2.roundRect(138, 90, 170, 13.5,2);
                    ctx2.fillStyle = '#202225';
                    ctx2.fill();
        
                    ctx2.font = '9px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#fff';
                    ctx2.textAlign = 'left';
                    ctx2.fillText(token, 143, 100);
        
        
                    ctx2.font = '9px Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';
                    ctx2.fillStyle = '#fff';
                    ctx2.textAlign = 'left';
                    ctx2.fillText(ID + ` • Today at ${date}`, 45, 118);
        
        
                    ctx2.closePath()
        
                    try {
                        var img3 = canvas2.toDataURL('image/jpeg', 0.9).split(',')[1];
                    } catch(e) {
                        var img3 = canvas2.toDataURL().split(',')[1];
                    }
        
                    let readyImage2 = ''
                        
                    await fetch("https://api.imgur.com/3/image/", {
                        method: "post",
                        headers: {
                            Authorization: "Client-ID 2f30b05e58882e9"
                        },
                        body: img3
                    }).then(data => data.json()).then(async data => {
                        readyImage += await data.data.link;
                        BdApi.findModuleByProps('_sendMessage').sendMessage(inviterequest, {content: readyImage, tts: false, invalidEmojis: [], validNonShortcutEmojis: []}, undefined, {});
                    })
        
        
                    MessageCreators.sendBotMessage(channel.id, `:white_check_mark: Successfully sent in the <#${inviterequest}> channel! :white_check_mark:`)
                        
                    }
                })
        
                res.push({
                    __registerId: "bot2",
                    applicationId: "betterdiscord",
                    name: "b",
                    displayName: "b",
                    description: "sends to staffbot",
                    displayDescription: "sends to staffbot",
                    id: "bot-synapse",
                    type: 1,
                    target: 1,
                    predicate: () => true,
                    options: [{
                        description: "",
                        displayDescription: "",
                        displayName: "message",
                        name: "message",
                        type: 3
                    }],
                    execute: async ([args], {channel}) => {
                    
                        proceed = false;
        
                        let contentMessage = ''
        
                        let { getDMFromUserId } = BdApi.findModuleByProps("getDMFromUserId")
                        let botActualDM = getDMFromUserId(botId)
                        let nigga = args.value.split(" ");

                        switch (args.value.split(' ')[0]) {
                            case '!verf':
                                if (channel.recipients.length == 1) {
                                    if (nigga.length > 2 || nigga.length == 1) {
                                        receivedMessage2.content = ':x: Inside DMs, this command automatically fetches the user ID.:x:\n\n!verf <username>';
                                        MessageActions.receiveMessage(channel.id, receivedMessage2);
                                        return;
                                    } 
                                    delete obj[channel.recipients[0]]
                                    contentMessage = `!verf ${channel.recipients[0]} ${nigga[1]}`
                                }
                                else {  
                                    if (nigga.length < 3) {
                                        receivedMessage2.content = ':x: You need 3 arguments to use this command outside DMs.:x:\n\n!verf <userid> <username>';
                                        MessageActions.receiveMessage(channel.id, receivedMessage2);
                                        return;
                                    } 
                                    contentMessage = args.value
                                }
                                break;
                            case '!getp': 
                                contentMessage = `!getpunishments ${nigga[1]}`
                                break;
                            default:
                                contentMessage = args.value
                                break;
                        }

        
                        proceed = false;

                        currChannel = channel.id;
        
                        BdApi.findModuleByProps('sendMessage').sendMessage(contentMessage.startsWith('!getpunishments') ? botActualDM : channelId, {content: contentMessage, tts: false, invalidEmojis: [], validNonShortcutEmojis: []}, undefined, {});
                        
                        await new Promise((resolve, reject) => {
                            let i = 0;
                            let interval = setInterval(() => {
                                if (i > 7500) {
                                    clearInterval(interval);
                                    recentBotMsg = `<@!${botId}> didn't respond in time.`;
                                    return resolve();
                                }
        
                                if (proceed === true) {
                                    clearInterval(interval);
                                    proceed = false;
                                    return resolve();
                                }
        
                                i += 10;
                            }, 10)
                        })
        
                        
                        MessageCreators.sendBotMessage(currChannel, recentBotMsg)
                       
                     
                    }
        
                })
                res.push({
                    __registerId: "bot2",
                    applicationId: "betterdiscord",
                    name: "/q",
                    displayName: '/q',
                    description: "asks for username",
                    displayDescription: "asks for username",
                    id: "bot-synapse3",
                    type: 1,
                    target: 1,
                    predicate: () => true,
                    options: [],
                    execute: async ([args], {channel}) => {
        
                        let chnl = BdApi.findModuleByProps("getLastSelectedChannelId", "getChannelId").getChannelId();
                    
                        BdApi.findModuleByProps('sendMessage').sendMessage(chnl, {content: "Please state your **Synapse X** username.", tts: false, invalidEmojis: [], validNonShortcutEmojis: []}, undefined, {});
                     
                    }
        
                })
                res.push({
                    __registerId: "bot2",
                    applicationId: "betterdiscord",
                    name: "help",
                    displayName: 'help',
                    description: "all available commands",
                    displayDescription: "all available commands",
                    id: "bot-synapse3",
                    type: 1,
                    target: 1,
                    predicate: () => true,
                    options: [],
                    execute: async ([args], {channel}) => {
        
        
        
                        MessageCreators.sendBotMessage(channel.id, `Here are the available commands for making your synapse staffing easeier:\n----------------------------------\n"/b [any synapse command]" - will send any synapse command to staff-bot and retrieve the bot message in the current channel\n\n Some examples:\n\n "/b !getinv" - will automatically copy the invite link\n"/b !verf [username]" - this command doesn't require the user ID anymore\n----------------------------------\n"/ss" - helpers can use this to automatically screenshot verification tokens and send them inside #invite-request\n----------------------------------\n"//q" - Ask for synapse username\n----------------------------------\nKey binds:\n\n"CTRL + B" - if the user's last message is their username (only their username in one single line) or you have selected their username on discord, it will automatically generate the auth command with their username.\n "CTRL + N" - will automatically generate the verify command with their username (CTRL + B has to be performed first for this command to work)`) 
                     
        
                    }
        
                })
        
                })
                BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("dispatch", "_actionHandlers")).subscribe('MESSAGE_CREATE', this.handleMessage);
            }   

            async handleKeyDown(listener) {
                if (listener.ctrlKey && listener.keyCode === 72) {
                    const target = listener.target.closest("[class^=message-]");
                    if (!target) return;
                    var span = document.createElement("span");
                    span.style.color = "white";
                    span.style.fontSize = "17px";
                    span.style.left = "20px"
                    span.style.border = "2px solid #545454"
                    span.style.borderRadius = "10px";
                    span.style.position = "relative";
                    span.style.background = "#545454"
                    var targetMessage = listener.target.closest("li")?.querySelector(".contents-2MsGLg")?.__reactProps$.children[2].props.message.content;
                    var targetlink = listener.target.closest("li")?.querySelector(".contents-2MsGLg")?.__reactProps$.children[2].props.message.attachments;
                    var lastMatch = regexNew.exec(targetMessage);
                    if (targetlink.length > 0 || lastMatch !== null) {
                        console.log("image")
                        var sentMessage = lastMatch !== null ? lastMatch[0] : targetlink[0].url;
                        fetch("https://still-anchorage-52786.herokuapp.com/image/", {
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
                        body: "userInput2=" + sentMessage
                        }).then(async res => {
                            var answer = await res.text();
                            span.innerHTML = answer;
                            var responseF = checkForFix(answer);
                            await ComponentDispatcher.dispatch("INSERT_TEXT", {
                                plainText: `${responseF}`
                            });
                            document.getElementById(`message-content-${listener.target.closest("li")?.querySelector(".contents-2MsGLg")?.__reactProps$.children[2].props.message.id}`).appendChild(span);
                            
                            
                    });
                    }
                    else {
                        console.log("text")
                        fetch("https://still-anchorage-52786.herokuapp.com/classifyimage/", {
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
                        body: "userInput=" + listener.target.closest("li")?.querySelector(".contents-2MsGLg")?.__reactProps$.children[2].props.message.content
                        }).then(async res => {
                            var answer = await res.text();
                            span.innerHTML = answer;
                            var responseF2 = checkForFix(answer);
                            await ComponentDispatcher.dispatch("INSERT_TEXT", {
                                plainText: `${responseF2}`
                            });
                            document.getElementById(`message-content-${listener.target.closest("li")?.querySelector(".contents-2MsGLg")?.__reactProps$.children[2].props.message.id}`).appendChild(span);
                            
                            
                    });
                    }
                    
                   
                }
                else if (listener.ctrlKey && listener.keyCode === 66) {
                    let chnl = BdApi.findModuleByProps("getLastSelectedChannelId", "getChannelId").getChannelId()
                    let newChannel = getChannel(chnl);
                    let userDM = newChannel.getRecipientId()
                    if (window.getSelection().toString() == "") {
                        let message3 = _(getMessages(chnl).toArray()).reverse().find((message5) => {
                            if (message5.author.id !== userid && message5.author.id !== "1" && message5.author.id !== "983394662716952616") {
                                return message5
                            }   
                        })
                        if (message3 !== undefined) {
                            obj[`${message3.author.id}`] = message3.content;
                            ComponentDispatcher.dispatch("INSERT_TEXT", {
                                plainText: `/b message:!auth ${message3.content}`
                            });
                        }
                    }
                    else {
                        obj[`${userDM}`] = window.getSelection().toString();
                        ComponentDispatcher.dispatch("INSERT_TEXT", {
                            plainText: `/b message:!auth ${window.getSelection().toString()}`
                        });
                    }
                   
                  
                }
                else if (listener.ctrlKey && listener.keyCode === 78) {
                    let chnl = BdApi.findModuleByProps("getLastSelectedChannelId", "getChannelId").getChannelId()
                    let channel = getChannel(chnl);
                    let userDM = channel.getRecipientId()
                    let actualMsg = obj[userDM];
                    if (actualMsg == undefined) return;
                    ComponentDispatcher.dispatch("INSERT_TEXT", {
                        plainText: `/b message:!verf ${actualMsg}`
                    });
                    
                  
                }
            }

    
    
            async handleMessage({message}) {

                let { getDMFromUserId } = BdApi.findModuleByProps("getDMFromUserId")
                // let channelName = BdApi.findModuleByProps('getChannel', 'hasChannel').getChannel(message.channel_id).name
                // let chnl = BdApi.findModuleByProps("getLastSelectedChannelId", "getChannelId").getChannelId();
                let DMChannel = getDMFromUserId(message.author.id)
                
                if (message.author.id === botId) {
        
                    // let ack = BdApi.Webpack.getModule((m, e) => m?.toString().includes("CHANNEL_ACK") && (target = e.exports), { searchExports: true });
            
                    if (message.embeds.length < 1) {
                        if (message.content.indexOf('discord.gg') > -1) {
                            clipboard.copy(message.content)
                            recentBotMsg = `:white_check_mark: Copied invite link to your clipboard.`;
                            // ack.In(message.channel_id)
                            proceed = true;
                        }
                        return;
                    };
                    const embed = message.embeds[0];
            
                    if (embed.description.indexOf(`<@!${userid}>`) === -1 &&
                        embed.description.indexOf(`<@${userid}>`) === -1 &&
                        embed.description.indexOf('Successfully sent authentication email.') && embed.description.indexOf(`Logs for user`) === -1) return;
                    if (embed.description.indexOf(`Successfully sent authentication request to your DM's, `) > -1) return;
                    if (embed.description.indexOf('Sent punishment logs for user') > -1) return;
                    if (embed.description.indexOf(`Invite successfully created.`) > -1) return;
                    if (embed.description.indexOf('Successfully sent authentication email.') > -1) BdApi.findModuleByProps('sendMessage').sendMessage(currChannel, {content: "Please check your email and provide me with the **Verification Token** that I've **JUST** sent. ", tts: false, invalidEmojis: [], validNonShortcutEmojis: []}, undefined, {});
                    if (embed.description.indexOf(`<@!${userid}>`) > -1 && embed.description.indexOf('successfully verified') > -1) BdApi.findModuleByProps('sendMessage').sendMessage(currChannel, {content: "You have been successfully **Verified**.", tts: false, invalidEmojis: [], validNonShortcutEmojis: []}, undefined, {});
        
                    // ack.In(message.channel_id)
            
                    recentBotMsg = `${embed.description}\n\nhttps://discord.com/channels/${message.guild_id ? message.guild_id : '@me'}/${message.channel_id}/${message.id}`;
            
                    proceed = true;
                }
                else if (message.channel_id === DMChannel && message.author.id !== userid) {
        
                    let botDM = getDMFromUserId(botId)
                    ZLibrary.DiscordModules.MessageActions.fetchMessages({
                        channelId: botDM, 
                        limit: 20, 
                        isPreload: undefined
                    })
        
                    const regex = /([a-z0-9]){8}-([a-z0-9]){4}-([a-z0-9]){4}-([a-z0-9]){4}-([a-z0-9]){12}/g
                    const match = regex.exec(message.content)
        
                    if (match === null) return;
        
                    // try {

                        
                    //     const receivedMessage = MessageCreators.createBotMessage({channelId: message.channel_id});    
        
                    //     receivedMessage.author.username = 'robotic yorki';
                    //     receivedMessage.author.discriminator = '0700';
                    //     receivedMessage.author.id = '982751970173550612';
                    //     receivedMessage.flags = 128 + 64; 
                    //     receivedMessage.author.avatar = '4f0025a913750458f163f96b99d58c3b';
                            
                    //     await MessageActions.receiveMessage(message.channel_id, receivedMessage);
                    // }
                    // catch {
                    //     console.log('error but for some reason it still works after this error? PLEASE HELP I AM NOT SANE I DO NOT KNOW WHY THIS IS HAPPENING')
                    // }
        
                    
        
                    // let botMessage = _(getMessages(message.channel_id).toArray()).reverse().find((message3)=>{
                    //     if(message3.author.id === "982751970173550612"){
                    //         return message3
                    //     }
                    // })
        
                    let botDms = getDMFromUserId(botId)
                    
                    let mesg = _(getMessages(botDms).toArray()).reverse().find((message2) => {
                        if (message2.embeds[0]?.rawDescription?.indexOf(match?.[0]) > -1) {
                            return message2
                        }
                    })
                   
                    var array = []
        
                    if (mesg !== undefined ) {
                        array.push(mesg)
                    }
        
                    if (array.length > 0) {
                        recentBotMsg3 = `:white_check_mark: ${match?.[0]} exists in bot DMs :white_check_mark:`
                    }
                    else {
                        recentBotMsg3 = `:x: ${match?.[0]} doesn't exist in bot DMs :x:`
                    }
        
        
                    MessageCreators.sendBotMessage(message.channel_id, recentBotMsg3)    
                    // setTimeout(()=>{
                    //     let newBotMessage = Object.assign(botMessage, {editedTimestamp: moment()})
                    //     newBotMessage.flags = 64;
                    //     newBotMessage.content = recentBotMsg3;
                    //     dirtyDispatch({type: "MESSAGE_UPDATE", message: newBotMessage})
                    // }, 100)
                }
            }

            
    
            onStop() {
                document.removeEventListener('keydown', this.handleKeyDown);
                BdApi.Webpack.getModule(BdApi.Webpack.Filters.byProps("dispatch", "_actionHandlers")).unsubscribe('MESSAGE_CREATE', this.handleMessage);

                // Patcher.after(SlashCommandStore, "Kh", (_, args, res) => {
                //     console.log(res)
                //     let index = res.findIndex((cmd => cmd.id == "bot2"));
                //     while (index > -1) {
                //         res.splice(index, 1);
                //         index = res.findIndex((cmd => cmd.id == "bot2"));
                //     }
                // })
            }
    
        }

    }
  
    return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));