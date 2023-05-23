
type Manager = {
    team?: {
        scrumMaster?: {
            holdScrumMeetings: () => void
        }
    }
}

function manage(manager: Manager) {
    manager.team?.scrumMaster?.holdScrumMeetings()
}

function manageOldWays(manager: Manager) {
    if (manager.team && manager.team.scrumMaster) {
        manager.team.scrumMaster.holdScrumMeetings()
    }
}

// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature

manage({
    team: {
        // scrumMaster: {
        //     holdMeaningfulMeetings: ()=>{
        //         console.log('Holding e very useful meeting')
        //     }
        // }
    }
});

