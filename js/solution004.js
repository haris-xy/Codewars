function areYouPlayingBanjo(name) {
  if (name.charAt(0) == "R" || name.charAt(0) == "r"){
    console.log (`${name} plays banjo`) 
  } else {
    console.log (`${name} does not play banjo`)
  }
  return name;
}

areYouPlayingBanjo("rupert")