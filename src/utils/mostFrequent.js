export const mostFrequent = (arr, arraySize, mostOccurring) => {
    var result = []
    let map = new Map();
    // Put count of all the distinct elements in a map
    // with element as the key and count as the value.
    for (let i = 0; i < arraySize; i++) {

    // Get the count for the element if already present in the map
    // or get the default value which is 0.
        if (!map.has(arr[i]))
            map.set(arr[i], 0);

        map.set(arr[i],
            map.get(arr[i]) + 1);
    }

    // Create a priority queue to sort based on the count or 
    // on the key if the count is the same.
    let queue = [...map];

    queue.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        }
        else {
            return b[1] - a[1];
        }
    });

    for (let i = 0; i < mostOccurring; i++) {
        result.push(queue[i][0] + "\n");

    }
    return `The ${mostOccurring} most commonly occurring numbers are:\n \n${result.join('')}`
}