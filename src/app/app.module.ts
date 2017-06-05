import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutingModule } from './app.routing.module';
// Third party modules
import { CountoModule }  from 'angular2-counto';
import { QuillModule } from 'ngx-quill';

// Custom components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { RecentJobsComponent } from './recent-jobs/recent-jobs.component';
import { SingleJobComponent } from './single-job/single-job.component';
import { FactsComponent } from './facts/facts.component';
import { HowWorkComponent } from './how-work/how-work.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { Home1Component } from './home1/home1.component';
import { Navigation2Component } from './navigation2/navigation2.component';
import { Home2Component } from './home2/home2.component';
import { PricingComponent } from './pricing/pricing.component';
import { SinglePriceComponent } from './single-price/single-price.component';
import { BrowseJobs1Component } from './browse-jobs1/browse-jobs1.component';
import { FilterComponent } from './filter/filter.component';
import { JobsMatchComponent } from './jobs-match/jobs-match.component';
import { SingleJob2Component } from './single-job2/single-job2.component';
import { BrowseJobs2Component } from './browse-jobs2/browse-jobs2.component';
import { BrowseJobs3Component } from './browse-jobs3/browse-jobs3.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobheaderComponent } from './jobheader/jobheader.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobApplyHeaderComponent } from './job-apply-header/job-apply-header.component';
import { SelectResumeComponent } from './select-resume/select-resume.component';
import { SingleResumeComponent } from './single-resume/single-resume.component';
import { CustomApplicationComponent } from './custom-application/custom-application.component';
import { PostJobComponent } from './post-job/post-job.component';
import { PostJobHeaderComponent } from './post-job-header/post-job-header.component';
import { PostJobDetailComponent } from './post-job-detail/post-job-detail.component';
import { SubmitJobComponent } from './submit-job/submit-job.component';
import { ManageJobComponent } from './manage-job/manage-job.component';
import { SingleJob3Component } from './single-job3/single-job3.component';
import { JobCandidateHeaderComponent } from './job-candidate-header/job-candidate-header.component';
import { JobCandidateComponent } from './job-candidate/job-candidate.component';
import { SingleCandidateComponent } from './single-candidate/single-candidate.component';
import { BrowseResumeComponent } from './browse-resume/browse-resume.component';
import { ResumeListHeaderComponent } from './resume-list-header/resume-list-header.component';
import { BrowseSingleResumeComponent } from './browse-single-resume/browse-single-resume.component';
import { ResumeDetailComponent } from './resume-detail/resume-detail.component';
import { ResumeDetailHeaderComponent } from './resume-detail-header/resume-detail-header.component';
import { ResumeEducationComponent } from './resume-education/resume-education.component';
import { ResumeWorkexperienceComponent } from './resume-workexperience/resume-workexperience.component';
import { ResumeSkillsComponent } from './resume-skills/resume-skills.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { AddResumeHeaderComponent } from './add-resume-header/add-resume-header.component';
import { AddResumeMediaComponent } from './add-resume-media/add-resume-media.component';
import { AddResumeEducationComponent } from './add-resume-education/add-resume-education.component';
import { AddResumeExperienceComponent } from './add-resume-experience/add-resume-experience.component';
import { AddResumeSkillsComponent } from './add-resume-skills/add-resume-skills.component';
import { ManageResumeComponent } from './manage-resume/manage-resume.component';
import { ManageResumeSingleComponent } from './manage-resume-single/manage-resume-single.component';
import { BrowseCompanyComponent } from './browse-company/browse-company.component';
import { BrowseCompanyHeaderComponent } from './browse-company-header/browse-company-header.component';
import { BrowseCompanySingleComponent } from './browse-company-single/browse-company-single.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyDetailHeaderComponent } from './company-detail-header/company-detail-header.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddCompanyHeaderComponent } from './add-company-header/add-company-header.component';
import { AddCompanyDetailComponent } from './add-company-detail/add-company-detail.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { ManageCompanySingleComponent } from './manage-company-single/manage-company-single.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogWidgetComponent } from './blog-widget/blog-widget.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleBlogDetailComponent } from './single-blog-detail/single-blog-detail.component';
import { AboutComponent } from './about/about.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ChatComponent } from './chat/chat.component';
import { SingleMessageComponent } from './single-message/single-message.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    RecentJobsComponent,
    SingleJobComponent,
    FactsComponent,
    HowWorkComponent,
    CategoriesComponent,
    SubscribeComponent,
    FooterComponent,
    Home1Component,
    Navigation2Component,
    Home2Component,
    PricingComponent,
    SinglePriceComponent,
    BrowseJobs1Component,
    FilterComponent,
    JobsMatchComponent,
    SingleJob2Component,
    BrowseJobs2Component,
    BrowseJobs3Component,
    JobDetailComponent,
    JobheaderComponent,
    JobApplyComponent,
    JobApplyHeaderComponent,
    SelectResumeComponent,
    SingleResumeComponent,
    CustomApplicationComponent,
    PostJobComponent,
    PostJobHeaderComponent,
    PostJobDetailComponent,
    SubmitJobComponent,
    ManageJobComponent,
    SingleJob3Component,
    JobCandidateHeaderComponent,
    JobCandidateComponent,
    SingleCandidateComponent,
    BrowseResumeComponent,
    ResumeListHeaderComponent,
    BrowseSingleResumeComponent,
    ResumeDetailComponent,
    ResumeDetailHeaderComponent,
    ResumeEducationComponent,
    ResumeWorkexperienceComponent,
    ResumeSkillsComponent,
    AddResumeComponent,
    AddResumeHeaderComponent,
    AddResumeMediaComponent,
    AddResumeEducationComponent,
    AddResumeExperienceComponent,
    AddResumeSkillsComponent,
    ManageResumeComponent,
    ManageResumeSingleComponent,
    BrowseCompanyComponent,
    BrowseCompanyHeaderComponent,
    BrowseCompanySingleComponent,
    CompanyDetailComponent,
    CompanyDetailHeaderComponent,
    AddCompanyComponent,
    AddCompanyHeaderComponent,
    AddCompanyDetailComponent,
    ManageCompanyComponent,
    ManageCompanySingleComponent,
    BlogComponent,
    BlogPostComponent,
    BlogWidgetComponent,
    SingleBlogComponent,
    SingleBlogDetailComponent,
    AboutComponent,
    AboutTeamComponent,
    ContactComponent,
    FaqComponent,
    ChatComponent,
    SingleMessageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CountoModule,
    appRoutingModule,
    QuillModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCv7mCn8u8oZN_Mn5prGOujiBcMCw59Jo'
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
