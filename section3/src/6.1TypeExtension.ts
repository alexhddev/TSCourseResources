type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = SimpleJob & { // type intersection
    hasManyMeetings: true,
    reportsToBeCompleted: string[],
}

let complicatedJob: ComplicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

type MeetingHolder = {
    meetingMaxLength: number
    holdMeeting: ()=> void
}

class ProjectManager implements MeetingHolder {

    meetingMaxLength = 60;
    holdMeeting = ()=>{
        console.log('Just holding a meeting')
    }
}

export {}