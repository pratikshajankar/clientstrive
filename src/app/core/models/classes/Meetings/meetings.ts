export class Meetings{
    "projectMeetingId": 0;
    "projectId": 0;
    "companyName":string;
    "meetingLeadByEmpId": 0;
    "leadByEmployeName":string
    "clientId":0;
    "meetingDate":string;
    "startTime":string;
    "endTime": string;
    "meetingMedium": string;
    "isRecordingAvailable": true;
    "recordingUrl":string;
    "meetingNotes":string;
    "clientPersonNames": string;
    "meetingTitle": string;
    "meetingStatus": string;

    constructor(){
        this.projectMeetingId=0;
        this.projectId=0;
        this.meetingLeadByEmpId=0;
        this.meetingDate="";
        this.startTime="";
        this.endTime="";
        this.meetingMedium="";
        this.isRecordingAvailable=true;
        this.recordingUrl="";
        this.meetingNotes="";
        this.clientPersonNames="";
        this.meetingTitle="";
        this.meetingStatus="";
        this.clientId=0;
        this.leadByEmployeName="";
        this.companyName="";

    }
  
}