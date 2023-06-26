pipeline{
    agent any
    tools{
        maven "maven3"
    }
    environment {
      DOCKER_TAG = getVersion()
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
                sh "docker build . -t satishkollati/tomcat:${DOCKER_TAG}"
            }
        }
        stage("docker push"){
            steps{
                withCredentials([string(credentialsId: 'docker-hub', variable: 'dockerHubPwd')]) {
                sh "docker login -u satishkollati -p ${dockerHubPwd}"
            }
            sh "docker push satishkollati/tomcat:${ DOCKER_TAG} "
            }
        }
        stage("deployment"){
            steps{
                ansiblePlaybook credentialsId: 'ansible-user3', disableHostKeyChecking: true, extras: "-e ${DOCKER_TAG}", installation: 'ansible', playbook: 'ansible-deploy'
                         }
        }

    }
    }

    def getVersion(){
    def commitHash = sh label: '', returnStdout: true, script: 'git rev-parse --short HEAD'
    return commitHash
}
