# Basics

## Directives
```javascript
<p *ngIf="serverCreated; else noServer">Server was created, server name is: {{serverName}}</p>
<ng-template #noServer>
    <p>No server was created!</p>
</ng-template>
```


