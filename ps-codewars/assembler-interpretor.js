// https://www.codewars.com/kata/58e61f3d8ff24f774400002c/train/javascript
/*
Program Example
; My first program
mov  a, 5
inc  a
call function
msg  '(5+1)/2 = ', a    ; output message
end

function:
    div  a, 2
    ret
*/
function assemblerInterpreter(program) {
    let programArray = program.split('\n');
    let registers = {};
    let programCounter = 0;
    let programLength = programArray.length;
    let instruction;
    let register;
    let value;
    let label;
    let labelValue;
    let labelArray = [];
    let labelObject = {};
    let labelCounter = 0;
    let labelLength;
    let labelName;
    let labelPosition;
    let labelPositionArray = [];
    let labelPositionObject = {};
    let labelPositionCounter = 0;
    let labelPositionLength;
    let labelPositionName;
    let labelPositionValue;
    let labelPositionValueArray = [];
    let labelPositionValueObject = {};
    let labelPositionValueCounter = 0;
    let labelPositionValueLength;
    let labelPositionValueName;
    
    // CallStack
    let callStack = [];
    let callStackCounter = 0;
    let callStackLength;
    let callStackName;
    let callStackValue;

    // Get the labels
    for (let i = 0; i < programLength; i++) {
        instruction = programArray[i];
        if (instruction.indexOf(':') !== -1) {
            label = instruction.split(':');
            labelName = label[0];
            labelValue = label[1];
            labelArray.push(labelName);
            labelObject[labelName] = labelValue;
            labelCounter++;
        }
    }

    // Get the label positions
    for (let i = 0; i < programLength; i++) {
        instruction = programArray[i];
        if (instruction.indexOf(':') === -1) {
            labelPosition = instruction.split(' ');
            labelPositionName = labelPosition[0];
            labelPositionValue = labelPosition[1];
            labelPositionArray.push(labelPositionName);
            labelPositionObject[labelPositionName] = labelPositionValue;
            labelPositionCounter++;
        }
    }

    // Get the label positions values
    for (let i = 0; i < programLength; i++) {
        instruction = programArray[i];
        if (instruction.indexOf(':') === -1) {
            labelPositionValue = instruction.split(' ');
            labelPositionValueName = labelPositionValue[0];
            labelPositionValueValue = labelPositionValue[1];
            labelPositionValueArray.push(labelPositionValueName);
            labelPositionValueObject[labelPositionValueName] = labelPositionValueValue;
            labelPositionValueCounter++;
        }
    }

    // Get the registers
    for (let i = 0; i < programLength; i++) {
        instruction = programArray[i];
        if (instruction.indexOf(':') === -1) {
            register = instruction.split(' ');
            registerName = register[0];
            registerValue = register[1];
            registers[registerName] = registerValue;
        }
    }

    // Get the program counter
    for (let i = 0; i < programLength; i++) {
        instruction = programArray[i];
        if (instruction.indexOf(':') === -1) {
            programCounter++;
        }
    }

    // Instruction Set: mov, inc, dec, add, sub, mul, div, label, jmp, cmp, jne, je, jge, jg, jle, jl, call, ret, msg, end, ; comment
    for (let i = 0; i < programLength; i++) {
        instruction = programArray[i];
        if (instruction.indexOf(':') === -1) {
            if (instruction.indexOf('mov') !== -1) {
                let mov = instruction.split(' ');
                let movName = mov[0];
                let movValue = mov[1];
                registers[movName] = movValue;
            }
            if (instruction.indexOf('inc') !== -1) {
                let inc = instruction.split(' ');
                let incName = inc[0];
                let incValue = inc[1];
                registers[incName] = parseInt(registers[incName]) + parseInt(incValue);
            }
            if (instruction.indexOf('dec') !== -1) {
                let dec = instruction.split(' ');
                let decName = dec[0];
                let decValue = dec[1];
                registers[decName] = parseInt(registers[decName]) - parseInt(decValue);
            }
            if (instruction.indexOf('add') !== -1) {
                let add = instruction.split(' ');
                let addName = add[0];
                let addValue = add[1];
                registers[addName] = parseInt(registers[addName]) + parseInt(addValue);
            }
            if (instruction.indexOf('sub') !== -1) {
                let sub = instruction.split(' ');
                let subName = sub[0];
                let subValue = sub[1];
                registers[subName] = parseInt(registers[subName]) - parseInt(subValue);
            }
            if (instruction.indexOf('mul') !== -1) {
                let mul = instruction.split(' ');
                let mulName = mul[0];
                let mulValue = mul[1];
                registers[mulName] = parseInt(registers[mulName]) * parseInt(mulValue);
            }
            if (instruction.indexOf('div') !== -1) {
                let div = instruction.split(' ');
                let divName = div[0];
                let divValue = div[1];
                registers[divName] = parseInt(registers[divName]) / parseInt(divValue);
            }
            if (instruction.indexOf('jmp') !== -1) {
                let jmp = instruction.split(' ');
                let jmpName = jmp[0];
                let jmpValue = jmp[1];
                programCounter = labelObject[jmpValue];
            }
            if (instruction.indexOf('cmp') !== -1) {
                let cmp = instruction.split(' ');
                let cmpName = cmp[0];
                let cmpValue = cmp[1];
                if (registers[cmpName] > registers[cmpValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('jne') !== -1) {
                let jne = instruction.split(' ');
                let jneName = jne[0];
                let jneValue = jne[1];
                if (registers[jneName] !== registers[jneValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('je') !== -1) {
                let je = instruction.split(' ');
                let jeName = je[0];
                let jeValue = je[1];
                if (registers[jeName] === registers[jeValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('jge') !== -1) {
                let jge = instruction.split(' ');
                let jgeName = jge[0];
                let jgeValue = jge[1];
                if (registers[jgeName] >= registers[jgeValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('jg') !== -1) {
                let jg = instruction.split(' ');
                let jgName = jg[0];
                let jgValue = jg[1];
                if (registers[jgName] > registers[jgValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('jle') !== -1) {
                let jle = instruction.split(' ');
                let jleName = jle[0];
                let jleValue = jle[1];
                if (registers[jleName] <= registers[jleValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('jl') !== -1) {
                let jl = instruction.split(' ');
                let jlName = jl[0];
                let jlValue = jl[1];
                if (registers[jlName] < registers[jlValue]) {
                    programCounter++;
                }
            }
            if (instruction.indexOf('call') !== -1) {
                let call = instruction.split(' ');
                let callName = call[0];
                let callValue = call[1];
                callStack.push(programCounter);
                programCounter = labelObject[callValue];
            }
            if (instruction.indexOf('ret') !== -1) {
                let ret = instruction.split(' ');
                let retName = ret[0];
                let retValue = ret[1];
                programCounter = callStack.pop();
            }
            if (instruction.indexOf('msg') !== -1) {
                let msg = instruction.split(' ');
                let msgName = msg[0];
                let msgValue = msg[1];
                console.log(registers[msgValue]);
            }
            if (instruction.indexOf('end') !== -1) {
                console.log('Program has ended');
                return;
            }
        }
    }

    // Execute Program and Output Results
    
            
}