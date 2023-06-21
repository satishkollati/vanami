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
                withCredentials([string(credentialsId: 'docker-pass', variable: 'docker-credentials')]) {
                sh "docker login -u satishkollati -p ${docker-credentials}"
            }
            sh "docker push satishkollati/tomcat:${env.BUILD_ID} "
            }
        }
    }
    }
