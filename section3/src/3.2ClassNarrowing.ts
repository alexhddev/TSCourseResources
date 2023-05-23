// narrow down classes: with instanceof
class CompanyFounder {
    giveLongSpeechAboutCompanyPast(){
        'It all started when...'
    }
}

class CompanyCEO {
    giveLongSpeechAboutHowTheTimesAreHard(){
        'Things are hard but we can do it! ...'
    }
}

type LongSpeechGiver = CompanyFounder | CompanyCEO

function giveLongSpeech(speechGiver: LongSpeechGiver) {
    if (speechGiver instanceof CompanyFounder) {
        speechGiver.giveLongSpeechAboutCompanyPast();
    }
    if (speechGiver instanceof CompanyCEO) {
        speechGiver.giveLongSpeechAboutHowTheTimesAreHard();
    }
}

giveLongSpeech(new CompanyFounder())
giveLongSpeech(new CompanyCEO())