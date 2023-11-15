/***
    See docs: https://azure.github.io/static-web-apps-cli/docs/cli/swa/
    
    Begin commands to start server for executing this file using NodeJS with bash
    cd ../../
    swa start --config-name azure-static-angular-web-calls-azure-func002
    End commands to start server for executing this file using NodeJS with bash
    
    Begin commands to execute this file using NodeJS with bash
    firefox_f=$(perl -e '$_=shift; $_= $ENV{$_}; s/\\/\//g; $_=lcfirst; s@^(.):@/cygdrive/$1@; print' FIREFOX)
    chrome_f=$(perl -e '$_=shift; $_= $ENV{$_}; s/\\/\//g; $_=lcfirst; s@^(.):@/cygdrive/$1@; print ' CHROME)
    edge_f=$(perl -e '$_=shift; $_= $ENV{$_}; s/\\/\//g; $_=lcfirst; s@^(.):@/cygdrive/$1@; print' EDGE)
    echo sleep 10
    sleep 10
    #cmd.exe /c "start microsoft-edge: http://localhost:4200/" &
    "$chrome_f" http://localhost:4200/ &
    #"$firefox_f" http://localhost:4200/ &
    End commands to execute this file using NodeJS with bash


    See https://www.npmjs.com/package/@azure/msal-angular
    See https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/README.md#via-npm
    emacs ESC 2: install MSAL.js 
    Begin commands to execute this file using NodeJS with bash
    npm install @azure/msal-browser @azure/msal-angular@latest
    End commands to execute this file using NodeJS with bash

    This did not work:

    PS C:\Users\shein\source\repos\AzureStaticAngularWebCallsAzureFunc002> npm install @azure/msal-angular
    npm ERR! code ERESOLVE
    npm ERR! ERESOLVE unable to resolve dependency tree
    npm ERR!
    npm ERR! While resolving: angular-basic@0.0.0
    npm ERR! Found: rxjs@6.6.7
    npm ERR! node_modules/rxjs
    npm ERR!   rxjs@"~6.6.6" from the root project
    npm ERR!
    npm ERR! Could not resolve dependency:
    npm ERR! peer rxjs@"^7.0.0" from @azure/msal-angular@3.0.6
    npm ERR! node_modules/@azure/msal-angular
    npm ERR!   @azure/msal-angular@"*" from the root project
    npm ERR!
    npm ERR! Fix the upstream dependency conflict, or retry
    npm ERR! this command with --force or --legacy-peer-deps
    npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
    npm ERR!
    npm ERR!
    npm ERR! For a full report see:
    npm ERR! C:\Users\shein\AppData\Local\npm-cache\_logs\2023-10-28T19_09_21_154Z-eresolve-report.txt
    
    npm ERR! A complete log of this run can be found in: C:\Users\shein\AppData\Local\npm-cache\_logs\2023-10-28T19_09_21_154Z-debug-0.log

    Try again: install msal.js
    See  https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/README.md#prerequisites
    emacs ESC 3
    Begin commands to execute this file using NodeJS with bash
    npm install @azure/msal-browser
    End commands to execute this file using NodeJS with bash

    This appears to have worked.
    PS C:\Users\shein\source\repos\AzureStaticAngularWebCallsAzureFunc002> npm install @azure/msal-browser
    
    up to date, audited 1171 packages in 2s
    
    110 packages are looking for funding
      run `npm fund` for details
    
    38 vulnerabilities (21 moderate, 12 high, 5 critical)
    
    To address issues that do not require attention, run:
      npm audit fix
    
    To address all issues (including breaking changes), run:
      npm audit fix --force
    
    Run `npm audit` for details.    




    emacs ESC 4
    Begin commands to execute this file using NodeJS with bash
    swa build --config-name azure-static-angular-web-calls-azure-func002
    End commands to execute this file using NodeJS with bash



    To create a new project, run this command in a shell because it prompts:
    swa init

**/

import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IdTokenClaims, PromptValue } from '@azure/msal-common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 'World! Current date/time='+ new Date() + ' build date= Built at Wed Nov 15 10:29:09 2023' ;
}
