pipeline {
    agent any
    stages {
	stage('Building the Student Survey Image') {
	    steps {
		script {
		    checkout scm
		    sh 'echo ${BUILD_TIMESTAMP}'
<<<<<<< HEAD
		    sh 'rm -rf *.tar'
		    withCredentials([usernamePassword(credentialsId: 'docker-pass', passwordVariable: 'password', usernameVariable: 'username')]){
			sh "cd  | docker login -u ${username} -p ${password}"
		    }
		    sh "docker build -t liyuqin33/angular645:${BUILD_TIMESTAMP} ."
=======
	            sh 'rm -rf Angular@tmp'
		    dir('Angular') {
		    sh 'ls -a'
		    	withCredentials([usernamePassword(credentialsId: 'docker-pass', passwordVariable: 'password', usernameVariable: 'username')]){
				sh "cd  | docker login -u ${username} -p ${password}"
		    	}
		    	sh "docker build -t liyuqin33/angular645:${BUILD_TIMESTAMP} ."
	            }
>>>>>>> 4c966505517724d882e0e050452e910623949bee
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
    }
}
