type MapStringsCallback = (item: string) => string;

export default function mapStrings(
    array: string[],
    callbackfn: MapStringsCallback,
): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i += 1) {
        newArray.push(callbackfn(array[i]));
    }

    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapping = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapping);
console.log(abc);
