# Google Cloud Resource Hierarchy
Organization
|
Project
| - projectId
|   - Globaly Unique, Assigned by Google Cloud, Immutable after Creation
| - projectName
|   - Not Unique, Mutable
| - projectNumber
|
Resource


# Identity And Access Management(IAM)
Who
- Google Account
- Google Group
- Service Account
- Cloud Identity Domain


Can Do What = Role
IAM Role is a collection of permissions

e.g.
Virtual Machins
- create
- delete 
- update


## 3 Roles
Basic, Predefined, Custom

### Basic Role
- Owner
- Editor
- Viewer
- Billing Admin

*Basic Role are probabli too broad

### Predefined Role
e.g.
- instanceAdmin
  - compute.create
  - compute.delte
  - compute.update


### Custom Role
Predefined actions
compute.instances.get
compute.instances.create
compute.instances.delete


# Service Account
Virtual Machine -- Service Account --> Cloud Storage 

- Email
- Key instead of Password

Service Account do need to be managed.


# Cloud Identity


# Interacting With Google Cloud
Cloud Console
Cloud SDK and Cloud Shell
- gcloud tool
- gsutil (for Cloud Storage)
- bq (BigQuery)
APIs
Cloud Console Mobile


