import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { BrowseJobs1Component } from './browse-jobs1/browse-jobs1.component';
import { BrowseJobs2Component } from './browse-jobs2/browse-jobs2.component';
import { BrowseJobs3Component } from './browse-jobs3/browse-jobs3.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ManageJobComponent } from './manage-job/manage-job.component';
import { JobCandidateComponent } from './job-candidate/job-candidate.component';
import { BrowseResumeComponent } from './browse-resume/browse-resume.component';
import { ResumeDetailComponent } from './resume-detail/resume-detail.component';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { ManageResumeComponent } from './manage-resume/manage-resume.component';
import { BrowseCompanyComponent } from './browse-company/browse-company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ManageCompanyComponent } from './manage-company/manage-company.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home1Component
    },
    {
        path: 'home2',
        component: Home2Component
    },
    {
        path: 'browseJob1',
        component: BrowseJobs1Component
    },
    {
        path: 'browseJob2',
        component: BrowseJobs2Component
    },
    {
        path: 'browseJob3',
        component: BrowseJobs3Component
    },
    {
        path: 'jobDetail',
        component: JobDetailComponent
    },
    {
        path: 'jobApply',
        component: JobApplyComponent
    },
    {
        path: 'postJob',
        component: PostJobComponent
    },
    {
        path: 'manageJob',
        component: ManageJobComponent
    },
    {
        path: 'jobCandidate',
        component: JobCandidateComponent
    },
    {
        path: 'browseResume',
        component: BrowseResumeComponent
    },
    {
        path: 'resumeDetail',
        component: ResumeDetailComponent
    },
    {
        path: 'addResume',
        component: AddResumeComponent
    },
    {
        path: 'manageResume',
        component: ManageResumeComponent
    },
    {
        path: 'browseCompany',
        component: BrowseCompanyComponent
    },
    {
        path: 'companyDetail',
        component: CompanyDetailComponent
    },
    {
        path: 'addCompany',
        component: AddCompanyComponent
    },
    {
        path: 'manageCompany',
        component: ManageCompanyComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'singleBlog',
        component: SingleBlogComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class appRoutingModule{}