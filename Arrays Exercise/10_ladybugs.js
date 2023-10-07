function ladybug(fieldSize, ladybugsIndexes, commands) {
    let field = new Array(fieldSize).fill(0);
  
    ladybugsIndexes.split(' ').forEach(index => {
      index = parseInt(index);
      if (index >= 0 && index < fieldSize) {
        field[index] = 1;
      }
    });
  
    commands.forEach(command => {
      let [startIndex, direction, flyLength] = command.split(' ');
      startIndex = parseInt(startIndex);
      flyLength = parseInt(flyLength);
  
      if (
        startIndex < 0 ||
        startIndex >= fieldSize ||
        field[startIndex] === 0 ||
        flyLength === 0
      ) {
        // Invalid command, skip it
        return;
      }
  
      field[startIndex] = 0; // Ladybug flies away from the initial position
  
      let newPosition = startIndex;
  
      while (true) {
        if (direction === 'right') {
          newPosition += flyLength;
        } else {
          newPosition -= flyLength;
        }
  
        if (newPosition < 0 || newPosition >= fieldSize) {
          // Ladybug has flown out of the field
          break;
        }
  
        if (field[newPosition] === 1) {
          // Ladybug landed on another ladybug, continue flying
          continue;
        }
  
        // Ladybug landed on an empty cell
        field[newPosition] = 1;
        break;
      }
    });
  
    console.log(field.join(' '));
  }
  
  ladybug([3, '0 1', '0 right 1', '2 right 1']);
  const fieldSize = input[0];
  const ladybugsIndexes = input[1];
  const commands = input.slice(2);