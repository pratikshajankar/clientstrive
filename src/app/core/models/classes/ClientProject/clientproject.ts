export class Projectobj{
      "projectName": string;
      "startDate": string;
      "expectedEndDate": string;
      "clientProjectId": 0;
      "leadByEmpId":0;
      "completedDate":string;
      "contactPerson":string;
      "contactPersonContactNo":string;
      "totalEmpWorking":0;
      "projectCost":0;
      "projectDetails":string;
      "contactPersonEmailId":string;
      "clientId":0;


      constructor(){
        this.projectName="";
        this.startDate="";
        this.expectedEndDate="";
        this.clientProjectId=0;
        this.leadByEmpId=0;
        this.completedDate="";
        this.contactPerson="";
        this.contactPersonContactNo="";
        this.totalEmpWorking=0;
        this.projectCost=0;
        this.projectDetails="";
        this.contactPersonEmailId="";
        this.clientId=0;
      }
}