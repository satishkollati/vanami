pipeline{
    agent any
    tools{
        maven "maven3"
    }
    stages{
        stage("git fetch"){
            steps{
                git "https://github.com/satishkollati/vanami.git"
            }
        }
        stage("build the code"){
        steps{
            sh "mvn clean install"
        }
        }
        stage("docker image build"){
            steps{
                sh "docker build -t satishkollati/tomcat:${env.BUILD_ID}  ."
            }
        }
        stage("docker push"){
            steps{
                withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerHubPwd')]) {
                sh "docker login -u satishkollati -p ${dockerHubPwd}"
            }
            sh "docker push satishkollati/tomcat:${env.BUILD_ID} "
            }
        }
        stage("deployment"){
            steps{
                ansiblePlaybook credentialsId: 'ansible-user2', disableHostKeyChecking: true, extras: "-e ${env.BUILD_ID}", installation: 'ansible', inventory: 'inventary', playbook: 'ansible-deploy.yml'
                         }
        }

    }
    }
