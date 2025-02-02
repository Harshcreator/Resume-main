---
title: "Safeshell Sandbox CLI"
description: "A CLI tool that allows users to safely run untrusted code in an isolated container."
date: "Nov 15 2024"
demoURL: ""
repoURL: "https://github.com/Harshcreator/safeshell-sandbox-cli"
---

### SafeShell Sandbox CLI  

#### **Overview**  
**SafeShell Sandbox CLI** is a command-line tool that allows users to safely run untrusted code in an isolated Docker container. It mounts the current working directory into the container, provides an interactive shell, and enforces security measures such as resource limits, network isolation, and running as a non-root user.  

---

### Features  
- **Secure Sandbox Environment**: Runs untrusted code in a Docker container with limited resources.  
- **Directory Mounting**: Mounts your current working directory into the container.  
- **Interactive Shell**: Provides access to a container shell (`bash` or `sh`).  
- **Security Enhancements**: Includes network isolation, non-root user privileges, and resource restrictions (CPU, memory, process limits).  
- **Customizability**: Supports custom Docker images, environment variables, and resource configurations.  

---

### Installation  
1. Ensure Docker is installed and running on your system.  
2. Install the CLI globally using npm:  
   ```bash
   npm install -g safeshell-sandbox-cli
   ```  

---

### Usage  

#### **Basic Command**  
Start the sandbox:  
```bash
safeshell-sandbox-cli start
```  

#### **Options**  
| Option               | Description                                    | Default         |  
|----------------------|------------------------------------------------|-----------------|  
| `-i, --image <name>` | Specify a custom Docker image                  | `ubuntu:latest` |  
| `--no-network`       | Disable network access inside the container    | Enabled         |  
| `--cpu <limit>`      | Set CPU limit (in cores, e.g., `1`, `0.5`)     | `1`             |  
| `--memory <limit>`   | Set memory limit (e.g., `512m`, `1g`)          | `512m`          |  
| `--verbose`          | Enable detailed logs for debugging purposes    | Disabled        |  

#### **Examples**  
1. Start a sandbox with default settings:  
   ```bash
   safeshell-sandbox-cli start  
   ```  

2. Use a custom Docker image:  
   ```bash
   safeshell-sandbox-cli start --image alpine  
   ```  

3. Disable network access:  
   ```bash
   safeshell-sandbox-cli start --no-network  
   ```  

4. Limit CPU and memory usage:  
   ```bash
   safeshell-sandbox-cli start --cpu 0.5 --memory 256m  
   ```  

---

### Security Features  
1. **Non-Root User**: The container runs as a non-root user (`nobody`) to minimize privilege escalation risks.  
2. **Network Isolation**: By default, containers can be started without internet access using `--no-network`.  
3. **Resource Limits**: CPU, memory, and process limits are applied to prevent abuse.  

---

### Testing  

#### **Setup**  
Install Jest for testing:  
```bash
npm install --save-dev jest @types/jest ts-jest  
npx ts-jest config:init  
```  

#### **Write Tests**  
Create a test file: `tests/docker.test.ts`  
```ts
import { startSandbox } from '../src/docker';

describe('SafeShell Sandbox CLI', () => {
  it('should pull the specified Docker image', async () => {
    const options = { image: 'alpine', network: false, cpu: '1' };
    await expect(startSandbox(options)).resolves.not.toThrow();
  });

  it('should handle invalid Docker image errors', async () => {
    const options = { image: 'invalid-image', network: false, cpu: '1' };
    await expect(startSandbox(options)).rejects.toThrow();
  });

  it('should start a container with limited CPU and memory', async () => {
    const options = { image: 'alpine', network: true, cpu: '0.5', memory: '256m' };
    await expect(startSandbox(options)).resolves.not.toThrow();
  });
});
```  

#### **Run Tests**  
Execute the tests:  
```bash
npm test  
```  

---

### Project Structure  
```
safeshell-sandbox-cli/  
├── src/  
│   ├── index.ts       # CLI entry point  
│   ├── docker.ts      # Docker integration logic  
│   ├── config.ts      # Configurations and constants  
│   └── utils.ts       # Helper functions  
├── tests/  
│   └── docker.test.ts # Jest tests for Docker functionality  
├── package.json  
├── tsconfig.json  
└── README.md  
```

---

### Future Enhancements  
1. **Predefined Scripts**: Allow running predefined scripts inside the sandbox.  
2. **Plugin Support**: Add a plugin system for custom extensions.  
3. **GUI Interface**: Provide a graphical interface for managing sandboxes.  

---

### Meta

Harsh Singh - (harshsingh220603@gmail.com)
https://github.com/Harshcreator/
