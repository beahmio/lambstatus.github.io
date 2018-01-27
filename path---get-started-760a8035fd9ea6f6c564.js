webpackJsonp([0xe0bf5f51fc85],{995:function(a,t){a.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Contributing",group:"Internals",type:"doc"},fields:{slug:"/contributing"}}},{node:{frontmatter:{title:"Create a New Admin User",group:"Advanced Usage",type:"doc"},fields:{slug:"/create-a-new-admin-user"}}},{node:{frontmatter:{title:"Cost Estimate",group:"Internals",type:"doc"},fields:{slug:"/cost-estimate"}}},{node:{frontmatter:{title:"Get Started",group:"Basic Usage",type:"doc"},fields:{slug:"/get-started"}}},{node:{frontmatter:{title:"Integrate with Other Monitoring Systems",group:"Advanced Usage",type:"doc"},fields:{slug:"/integrate-with-other-monitoring-systems"}}},{node:{frontmatter:{title:"Set up Custom Domain",group:"Advanced Usage",type:"doc"},fields:{slug:"/set-up-custom-domain"}}},{node:{frontmatter:{title:"Supported AWS Regions",group:"Basic Usage",type:"doc"},fields:{slug:"/supported-aws-regions"}}},{node:{frontmatter:{title:"Set up the development environment",group:"Internals",type:"doc"},fields:{slug:"/set-up-the-development-environment"}}},{node:{frontmatter:{title:"Upgrading LambStatus",group:"Basic Usage",type:"doc"},fields:{slug:"/upgrading-lamb-status"}}}]},postBySlug:{html:'<p>This document lets you create a new LambStatus stack with just a few clicks!</p>\n<h3 id="prerequisite"><a href="#prerequisite" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisite</h3>\n<p>AWS account</p>\n<h3 id="launch-your-stack"><a href="#launch-your-stack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Launch your stack</h3>\n<ol>\n<li>\n<p>Launch a CloudFormation stack by clicking this button <a target="_blank" style="text-decoration: none; border-style: none;" href="https://console.aws.amazon.com/cloudformation/home#/stacks/new?stackName=StatusPage&templateURL={{templateLink}}"><img src="https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png" alt="Launch CloudFormation Stack" style="vertical-align: bottom;" /></a></p>\n</li>\n<li>\n<p>At the \'Create stack\' page, click \'Next\' (the CloudFormation template is already specified)!</p>\n</li>\n</ol>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.66813509544787%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA00lEQVQoz62RWwrCMBBFu/9NuAJXIH64CTegtvTx0TYvk2k7egcSUmlBwYFDMiRz51VorVhrzSEE/ocVj/uN27YVp+97LstSQBJgjEnAV0qlt1jIsiyJwlq3yoDAcRzZOZcEcVpr010bx88wbVcI1dxiJgh0Xcfee45/8kp2W/58jBWCuq6l/WEYxMeJlvMRaBeYpnlfMBeGIMCMIQQg/FOF0ZT1XFWVCDZNI60TkeBpFgLN3wsSBVkMwDzzOxbi/JuNxawEkR0Bv6KN5evpwufDkV8/eL/YYx7FSAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CloudFormationWizard1"\n        title=""\n        src="/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-ffc88.png"\n        srcset="/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-d16f8.png 198w,\n/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-f21b1.png 395w,\n/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-ffc88.png 790w,\n/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-81e7e.png 1185w,\n/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-7cfeb.png 1580w,\n/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-e6742.png 2370w,\n/static/CloudFormationWizard1-ae3e3211bca90d6cf39a0c9738ab29ac-5da9e.png 2724w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<ol start="3">\n<li>Enter your email address and click Next. The initial account information will be sent to this address.</li>\n</ol>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.10130468150422%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABAklEQVQoz62SO0/EMBCE8///CBX0FCAaChAF1DRpkILIJc6D+JkMzB62nFwkTghLn7K25dndyRbTNGEcR2it8R+r+KgPeHs/yIbCVVUJTGCMOfIdaz3JWQ6LSXtjYV1AoZRCCEEE53mG9172zrmEtTbF8T7/HgkI84KCIts1DAOiFbyPLMvye8u5IEtvmkba5OO/sBJkS23bChRnqzlMlLz7iUle+YlgXdcoyxJ93698JLSAnrML1XUSk1zjxEPvXapwK3hWhXtGf15fQd/fwD/crbAvjyIWheNIMVkS3PtTbE0eapONhRcfY4VboV1BzlUa5jPphgmt6vD69IzLi1t8AcIMW7GIVSa7AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CloudFormationWizard2"\n        title=""\n        src="/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-ffc88.png"\n        srcset="/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-d16f8.png 198w,\n/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-f21b1.png 395w,\n/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-ffc88.png 790w,\n/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-81e7e.png 1185w,\n/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-7cfeb.png 1580w,\n/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-e6742.png 2370w,\n/static/CloudFormationWizard2-9fba99d893cf2abe14bf61b27354aab9-94ed2.png 2606w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<ol start="4">\n<li>Click Next again.</li>\n</ol>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 52.620087336244545%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+0lEQVQoz61SW27EIBDj/qfpBfrTm0TqSlEeJQQChDxczIqErPZj+0Cy0ABjxuMRxhhYa7HvO/5jibZtE9myLJBSpp3xbyFIwDXPM4ZBYRxHsGpimqYL8vkdMZ4cjGd+QZilruuKruvAiom+7+MHA5RSCfyIZ3Vdp3u+paJ8n3EQct+2LRFnMC7lMC7fPN5fKvTeoaoq3G6faDoJqTR0IftZG86zsxXi0V320rnYm5igtU4TEEJI1bzk8rNxYTLJSEzTKO/VsToIScKSvfd/msmLy+wL3WR1J8541LFPLiAs62HQAZpkNEQpk9VR5k9grcOXMmibBh9v7/gGXRxd5PamslIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CloudFormationWizard3"\n        title=""\n        src="/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-ffc88.png"\n        srcset="/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-d16f8.png 198w,\n/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-f21b1.png 395w,\n/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-ffc88.png 790w,\n/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-81e7e.png 1185w,\n/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-7cfeb.png 1580w,\n/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-e6742.png 2370w,\n/static/CloudFormationWizard3-3bfe8278cf63701e00d0ba5c52dd8972-7600e.png 2748w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<ol start="5">\n<li>Check the acknowledgment checkbox at the bottom and click Create. The checkbox tells the template will create new IAM resources. <a href="https://github.com/ks888/LambStatus/blob/master/cloudformation/lamb-status.yml#L46-L174">Check this part</a> of the template if you\'re worried.</li>\n</ol>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 77.5346462436178%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWElEQVQ4y62T606DQBSE++g+homPVaQqNibacr8sdGFvLOOeNVBt/NGiJJOBP1/mnDlsOOcQQmCaJvzHsymLwsO0Vui6DsYY/71Wm3EcPVkbi24wqOoGDWvRdAPqTjh3OgkwrtD2ehEXBtb+Arwcta4qD+X9ACmlF62Ekl818gxULmEvjUtqQKlJ1trbR75MWJYl0jRFnuVgjEEpdVNhC3B2Sqa19r6m+QU4COWXb0ZL9PUtLzt0y8+y7M83ufn+QWMW7i7PYKwfeQZSCbRDanhVwhkopEJeNe50NKSZnOwqLUCuLHZJj/DA8HRonBh2zsMPUu09SlocK46kIfWLx+Ss9+8LULq9VdEr0jDEcbtFvA2QBI+IA/IA6f4NaV5/gVqFsh/RqQmt/KnzHRYpeLRD9/Lo/RSFXpz8OYA8vrsfXl3fMhVCzQ7DcJNOvEfdtIj3e9zfPeAT/l/jyrUmvYAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CloudFormationWizard4"\n        title=""\n        src="/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-ffc88.png"\n        srcset="/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-d16f8.png 198w,\n/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-f21b1.png 395w,\n/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-ffc88.png 790w,\n/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-81e7e.png 1185w,\n/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-7cfeb.png 1580w,\n/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-e6742.png 2370w,\n/static/CloudFormationWizard4-a4461c19ff6b89979ea77101a3791277-070b8.png 2742w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<ol start="6">\n<li>\n<p>Now the process to create the stack is ongoing. It may take 10-20 minutes, mainly due to the CloudFront settings. When the stack has been created, the email will be sent to the email address you\'ve entered.</p>\n</li>\n<li>\n<p>Click the link in the email, and sign in to admin console.</p>\n</li>\n</ol>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 790px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 46.45669291338583%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA4ElEQVQoz52RywqCQBSGfck2QZt6gRbRoiCIFvYgvUQPEYmpNY3XRNCVC6nI219noEiyrA58MGeG850fRuoMZ+iOZfTGc3RHMtqDKVr9yd9IirrBaq1AM7aCLdtjt+cwdgyO633FfYaQOOcwTROe5wl830cQBLAsC3Eci76pHMcRM4QQMsYEtm1XhJc0Q3I8oSiK34QkqkuY30R5XqAsy4+8COmiTphl+S1lWiuh1PROS1+ENFwn/FQkPScm0kStCp/TPQtpURRFCMPwLQe+hK0txKc2Cums6/pXuK77EF4B62CAVnKH/IAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="CloudFormationWizard6"\n        title=""\n        src="/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-ffc88.png"\n        srcset="/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-d16f8.png 198w,\n/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-f21b1.png 395w,\n/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-ffc88.png 790w,\n/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-81e7e.png 1185w,\n/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-7cfeb.png 1580w,\n/static/CloudFormationWizard6-613f1d01c5f83107b185595455531c5f-7860c.png 2286w"\n        sizes="(max-width: 790px) 100vw, 790px"\n      />\n    </span>\n  </span>\n  </p>\n<ol start="8">\n<li>Congrats! The your own status page is there! Why don\'t you create some components or incidents? Or you may check <a href="https://demo-admin.lambstatus.org/">our demo page</a> to see the usage.</li>\n</ol>\n<h3 id="troubleshooting"><a href="#troubleshooting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Troubleshooting</h3>\n<ul>\n<li>There is no email from the CloudFormation stack</li>\n</ul>\n<p>   <em>-> Check the spam folder. The email comes from <code>no-reply@verificationemail.com</code>.</em></p>\n<ul>\n<li>Failed to create the stack</li>\n</ul>\n<p>   <em>-> Some AWS regions are not available mainly due to the lack of Amazon Cognito support. <a href="/supported-aws-regions">Here</a> is the list of supported regions.</em> </p>',timeToRead:1,excerpt:"This document lets you create a new LambStatus stack with just a few clicks! Prerequisite AWS account Launch your stack Launch a…",frontmatter:{title:"Get Started"},fields:{slug:"/get-started"}}},pathContext:{slug:"/get-started"}}}});
//# sourceMappingURL=path---get-started-760a8035fd9ea6f6c564.js.map