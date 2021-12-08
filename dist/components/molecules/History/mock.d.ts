export declare const pathsHistory: {
    stepId: string;
    activityId: string;
    activityText: string;
    agent: string;
    agentName: string;
    user: import("../../../types/projects.types").IUser[];
    statusId: string;
    statusText: string;
    criticality: string;
    comment: string;
    actArea: string;
    pathId: string;
    date: number;
}[];
export declare const attachments: {
    id: string;
    attType: string;
    attTypeText: string;
    fileName: string;
    base64: string;
    singBase64: string;
    cert: string;
}[];
export declare const pathsUZADO: {
    stepId: string;
    activityId: string;
    activityText: string;
    agent: string;
    agentName: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        middleName: string;
        fullName: string;
        position: string;
        positionId: string;
        department: string;
        departmentId: string;
        departmentsPath: {
            id: string;
            name: string;
            unitType: string;
            unitTypeDesc: string;
        }[];
        photo: string;
    }[];
    statusId: string;
    statusText: string;
    criticality: string;
    comment: string;
    actArea: string;
    pathId: string;
    date: number;
}[];
