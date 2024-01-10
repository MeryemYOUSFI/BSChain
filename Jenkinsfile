node {
    def dockerImageTag = "meryemyousfi/ghm${env.BUILD_NUMBER}"
    def networkName = "mynetwork"
    def buildNumber = env.BUILD_NUMBER
    def minikubeProfile = "minikube"

    try {
        stage('Clone Repo') {
            git url: 'https://github.com/MeryemYOUSFI/BSChain.git',
            branch: 'master'
        }

        stage('Docker Login') { 
            sh "docker login -u meryemyousfi -p dckr_pat_U_J3qrskC990UBFwEjQA48W8EEA"
        }

        stage('Build Docker Images') {
            docker.build("meryemyousfi/ghm:${buildNumber}")
          
        }

        stage('Push Docker Images to Docker Hub') {
            echo "Pushing Docker images to Docker Hub"
            docker.image("meryemyousfi/ghm:${buildNumber}").push()
        }
        
        stage('Create Docker Network') {
            if (sh(script: "docker network inspect ${networkName}", returnStatus: true) != 0) {
                echo "Creating Docker network: ${networkName}"
                sh "docker network create ${networkName}"
                echo "Successfully created"

            } else {
                echo "Docker network ${networkName} already exists."
            }
        }
         stage('Deploy Docker Container') {
            echo "Running Ansible playbook to deploy Docker Compose"
            sh 'ansible-playbook -i ansible/inventory.ini ansible/playbook.yml'
        }
         stage('Set Kubernetes Context') {
            echo "Setting Kubernetes context to Minikube"
            sh "minikube start --profile=minikube"
            sh 'kubectl config get-contexts'
            sh "kubectl config set-context minikube --cluster=minikube --user=minikube"
            sh "kubectl config use-context ${minikubeProfile}"
        }

        stage('Deploy to Minikube') {
            echo "Deploying to Minikube"
            sh "ansible-playbook -i Ansible/inventory.ini kubernetes-deploy.yml"
            sh "minikube dashboard --url --profile=minikube"
        }

          

    } catch (Exception e) {
        throw e
    }
}

