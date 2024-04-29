export interface IEmployee{
    "roleId": 0
    "userName":string
    "empDesignation":string
    "role":string
    "empCode":string
    "empId": 0,
    "empName":string
    "empEmailId": string
    "empDesignationId": 0
    "empContactNo": string
    "empAltContactNo": string
    "empPersonalEmailId": string
    "empExpTotalYear": 0
    "empExpTotalMonth": 0
    "empCity": string
    "empState": string
    "empPinCode": string
    "empAddress": string
    "empPerCity": string
    "empPerState": string
    "empPerPinCode":string
    "empPerAddress": string
    "password": string
    "erpEmployeeSkills": [
      {
        "empSkillId": 0
        "empId": 0
        "skill": string
        "totalYearExp": 0
        "lastVersionUsed": string
      }
    ],
    "ermEmpExperiences": [
      {
        "empExpId": 0
        "empId": 0
        "companyName": string
        "startDate": "2024-04-27T08:57:01.920Z",
        "endDate": "2024-04-27T08:57:01.920Z",
        "designation": string
        "projectsWorkedOn": string
      }
    ]
}

export interface IDesignation{
  designationId:0
  designation:string

}

export interface IRole{
  roleId:0
  role:string
}