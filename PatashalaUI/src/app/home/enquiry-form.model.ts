export class EnquiryForm {
    EnquiryFormId: number;
    Name: string;
    Email: string;
    Mobile: string;
    CreatedOn: Date;
    State: string;
    Course: string;
    IPAddress: string;
    ReturnMessage: string;
  
    constructor(
      EnquiryFormId: number,
      Name: string,
      Email: string,
      Mobile: string,
      CreatedOn: Date,
      State: string,
      Course: string,
      IPAddress: string,
      ReturnMessage: string
    ) {
      this.EnquiryFormId = EnquiryFormId;
      this.Name = Name;
      this.Email = Email;
      this.Mobile = Mobile;
      this.CreatedOn = CreatedOn;
      this.State = State;
      this.Course = Course;
      this.IPAddress = IPAddress;
      this.ReturnMessage = ReturnMessage;
    }
  }
  