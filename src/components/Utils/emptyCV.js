const exampleCV = {
    personalInfo:{
        firstName:"",
        lastName:"",
        title:"",
        address:"",
        phoneNumber:"",
        email:"",
        description:""
    },
    experience:[
        {
            id:crypto.randomUUID(),
            position:"",
            company:"",
            workExperience:"",
            city:"",
            from:"",
            to:""
        },
    ],
    education:[
        {
            id:crypto.randomUUID(),
            universityName:"",
            city:"",
            degree:"",
            subject:"",
            from:"",
            to:"",
        },
    ]

}


export default exampleCV