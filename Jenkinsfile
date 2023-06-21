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
                withCredentials([string(credentialsId: 'docker-pass9', variable: 'docker-satish')]){
                sh "docker login -u satishkollati -p ${docker-satish}"
            }
            sh "docker push satishkollati/tomcat:${env.BUILD_ID} "
            }
        }
    }
    }
