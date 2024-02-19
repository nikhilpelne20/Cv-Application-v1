import exampleAvtar from "../../assets/Zoro.jpg"

const sampleCV = {
    personalInfo:{
        firstName:"Roronoa",
        lastName:"Zoro",
        title:"Strongest Swordsman",
        photo: exampleAvtar,
        address:"321 Sword Street, Wano Country",
        phoneNumber:"9232125311",
        email:"zoro_swordsman@wano.com",
        description:"A key character in the anime and manga series One Piece, is a formidable swordsman with a dream of becoming the world's greatest swordsman. Known for his three-sword style, he wields a unique style of combat that strikes fear into his enemies. Zoro is fiercely loyal to his captain, Monkey D. Luffy, and his crewmates, embodying unwavering determination and a strict moral code. Despite his tough exterior, he harbors a deep sense of honor and camaraderie, making him a steadfast ally on their journey to find the legendary One Piece treasure."
    },
    experience:[
        {
            id:crypto.randomUUID(),
            position:"First Mate",
            company:"Straw Hat Pirates",
            workExperience:"Zoro has served as the First Mate of the Straw Hat Pirates, displaying exceptional combat skills and leadership qualities. He has navigated through numerous perilous situations alongside his crewmates, contributing to their victories and survival.",
            city:"Grand Line",
            from:"2000",
            to:"Present"
        },
        {
            id:crypto.randomUUID(),
            position:"Bounty Hunter",
            company:"Freelancing",
            workExperience:"Before joining the Straw Hat Pirates, Zoro worked as a bounty hunter, honing his swordsmanship skills and gaining a reputation for his strength and determination in capturing criminals.",
            city:"East Blue",
            from:"1995",
            to:"2000"
        }
    ],
    education:[
        {
            id:crypto.randomUUID(),
            universityName:"Kuina Swordsmanship Dojo",
            city:"Shimotsuki Village",
            degree:"Swordsmanship Mastery",
            subject:"Senturyu",
            from:"1990",
            to:"1995"
        },
        {
            id:crypto.randomUUID(),
            universityName:"Mystical Sword Training Institute",
            city:"Wano Country",
            degree:"Advanced Sword Techniques",
            subject:"Senturyu",
            from:"1996",
            to:"1999"
        }
    ]
}

export default sampleCV
