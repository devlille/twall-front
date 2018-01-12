pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'TODO'
                //sh 'npm run test'
                //sh 'npm run start && npm run e2e'
            }
        }
        stage('Make Quality') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm run lint'

                script {
                    def scannerHome = tool 'SonarQube Scanner';
                    withSonarQubeEnv('SonarQube Server') {
                      sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Build') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm run build'
            }
        }
    }
}
