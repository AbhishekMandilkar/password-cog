import { Feather } from '@expo/vector-icons';

export const getPasswordIcon = (title: string):JSX.Element => {
    const type = title.toLowerCase();
    if(socialMediaSites.map((site) => type.includes(site)).length > 0) {
        console.log('here')
        return <Feather name="globe" size={92} color="black" />
    } else {
        console.log('here2')
        return <Feather name="lock" size={92} color="black" />
    }
}; 

//

const socialMediaSites = [
    'facebook',
    'fb',
    'instgram',
    'twitter',
    'linkedin',
    'youtube',
    'tiktok',
    'snapchat',
    'pinterest',
    'reddit',
    'twitch',
    'tumblr',
    'whatsapp',
    'telegram',
    'discord',
];




