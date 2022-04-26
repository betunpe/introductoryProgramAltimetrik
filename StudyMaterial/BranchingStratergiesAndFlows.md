GIT BRANCHING STRATEGIES
A “branching strategy” refers to the strategy a software development team employs when writing, merging, and shipping code in the context of a version control system like Git. Software developers working as a team on the same codebase must share their changes with each other. Branch strategies are useful to solve problems that could happen when the team wants to work on the same  code without trampling on each other.
Using a branching strategy ensures that everyone on the team is following the same process for making changes to source control.


Some common Git branching strategies

* GitFlow
The main idea of GitFlow is to islote the work in differents types of branches. This allows a development team to adapt very well to the collaborative process that they need.

* GitFlows is based on two infinitive life branches called main and develop branches.
main: it contains the production code
develop: contains the finish-develop code

While the team is developing there are others branches that exists only in the development stage:
feature:  it is created from the develop, when a new functionality needs to be developed. When this functionality is finished, this branch merges with the develop and main branches.
release: this is also created from the develop, when a code version needs to be released to production. At the end of the development, it merges with the develop and main branches.
hotfix: it is created from master when a bug detected in production needs to be fixed urgently


* GitHub Flow
It was created by GitHub and known as a GitFlow alternative. The difference between this strategy and the previous one is that here there isn't any release branch. In this case, the merge happens with the develop branch frequently, even multiple times a day if it's possible.
In GitHubFlow there are two kinds of branches:
      -      main: it contains the principal code which is ready for production                                                                                                                                                        at any time.
features: this branch allows the parallel development, they must be created with a descriptive name.


* GitLab Flow
This flow is similar to GitHub Flow. The principal difference is that in addition to the main and release branches, there are also environment branches.
Here when the development in the feature branch is finished, it merges with the main branch.


* Trunk-based development
This strategy requires no branches but instead, developers integrate their changes into a shared branch called “trunk” at least once a day. This shared branch should be ready for release anytime.
The main idea is that developers make small changes more frequently, so the objective is to limit long branches and avoid merge conflicts as all developers work on the same branch.



Links
https://www.flagship.io/git-branching-strategies/
https://openwebinars.net/blog/estrategias-de-branching-gitflow-gitlab-flow-oneflow-github-flow/#:~:text=Una%20%E2%80%9Cestrategia%20de%20branching%E2%80%9D%20es,en%20uso%2C%20por%20ejemplo%2C%20en
https://reviewpad.com/blog/github-flow-trunk-based-development-and-code-reviews/

