const PastebinAPI = require('pastebin-js');
const pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL');
const { makeid } = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require('pino');
const {
    default: Alone_Hacker,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require('@whiskeysockets/baileys');

function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    
    async function ALONE_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/' + id);
        try {
            let Pair_Code_By_Alone_Hacker = Alone_Hacker({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
                },
                printQRInTerminal: false,
                logger: pino({ level: 'fatal' }).child({ level: 'fatal' }),
                browser: Browsers.macOS('Chrome')
            });

            if (!Pair_Code_By_Alone_Hacker.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await Pair_Code_By_Alone_Hacker.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }

            Pair_Code_By_Alone_Hacker.ev.on('creds.update', saveCreds);
            Pair_Code_By_Alone_Hacker.ev.on('connection.update', async (s) => {
                const { connection, lastDisconnect } = s;
                if (connection === 'open') {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    await delay(800);
                    let b64data = Buffer.from(data).toString('base64');
                    let session = await Pair_Code_By_Alone_Hacker.sendMessage(Pair_Code_By_Alone_Hacker.user.id, { text: 'ALONE-MD~' + b64data });

                    let Alone_MD_TEXT = `
        
╔════════════════════◇
║『 SESSION CONNECTED』
║ ✨ Alone-MD 🔷
║ ✨ ALONE HACKER MODS🔷
╚════════════════════╝


---

╔════════════════════◇
║『 YOU'VE CHOSEN ALONE-MD 』
║ -Set the session ID in Heroku:
║ - SESSION_ID: 
╚════════════════════╝
╔════════════════════◇
║ 『••• _V𝗶𝘀𝗶𝘁 𝗙𝗼𝗿_H𝗲𝗹𝗽 •••』
║❍ 𝐎𝐰𝐧𝐞𝐫: 923235248941
║❍ 𝐖𝐚channel: https://whatsapp.com/channel/0029Vb50wllJuyAEmYS7iV1h
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞l: https://whatsapp.com/channel/0029Vb50wllJuyAEmYS7iV1h
║
║ ☬ ☬ ☬ ☬
╚═════════════════════╝
𒂀 Enjoy ALONE-MD


---

Don't Forget To Give Star⭐ To My Repo
______________________________`;

                    await Pair_Code_By_Alone_Hacker.sendMessage(Pair_Code_By_Alone_Hacker.user.id, { text: Toxic_MD_TEXT }, { quoted: session });

                    await delay(100);
                    await Pair_Code_By_Alone_Hacker.ws.close();
                    return await removeFile('./temp/' + id);
                } else if (connection === 'close' && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    Arslan_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log('Service restarted');
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: 'Service Currently Unavailable' });
            }
        }
    }
    
    return await ALONE_MD_PAIR_CODE();
});

module.exports = router;
