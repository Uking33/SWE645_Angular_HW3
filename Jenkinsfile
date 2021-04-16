pipeline {
    agent any
    stages {
	stage('Building the Student Survey Image') {
	    steps {
		script {
		    checkout scm
		    sh 'echo ${BUILD_TIMESTAMP}'
		    sh 'docker image prune'
		    withCredentials([usernamePassword(credentialsId: 'docker-pass', passwordVariable: 'password', usernameVariable: 'username')]){
		    	sh "cd  | docker login -u ${username} -p ${password}"
		    }
		    sh "docker build -t liyuqin33/angular645:${BUILD_TIMESTAMP} ."
		}
	    }
	}
	stage('Pushing Image to DockerHub') {
	    steps {
		script {
		    sh 'docker push liyuqin33/angular645:${BUILD_TIMESTAMP}'
		}
	    }
	}
        stage('Deloying to Rancher as single od') {
            steps {
                sh 'kubectl set image deployment/student-survey student-survey=liyuqin33/studentsurvey645:${BUILD_TIMESTAMP} -n swe645-hw3'
            }
        }
    }
}
