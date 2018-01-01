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
                sh 'npm run lint'
                sh 'npm run test && npm run e2e'
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