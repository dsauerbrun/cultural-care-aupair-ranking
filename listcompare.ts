import { readFileSync } from "fs";

export function findUniqueItems(list1: object[], list2: object[], uniqueKey = "id") {
  const ids1 = new Set(list1.map(item => item[uniqueKey]));
  const ids2 = new Set(list2.map(item => item[uniqueKey]));

  const onlyInList1 = list1.filter(item => !ids2.has(item[uniqueKey]));
  const onlyInList2 = list2.filter(item => !ids1.has(item[uniqueKey]));

  return {
    onlyInList1,
    onlyInList2,
    summary: {
      totalInList1: list1.length,
      totalInList2: list2.length,
      uniqueToList1: onlyInList1.length,
      uniqueToList2: onlyInList2.length,
      commonItems: ids1.size - onlyInList1.length,
    },
  };
}

function loadList(filePath: string): object[] {
  const raw = JSON.parse(readFileSync(filePath, "utf-8"));
  return Array.isArray(raw) ? raw : (raw.items ?? Object.values(raw).find(Array.isArray) ?? []);
}

if (import.meta.main) {
  const [file1, file2] = process.argv.slice(2);
  if (!file1 || !file2) {
    console.error("Usage: bun listcompare.ts <file1.json> <file2.json>");
    process.exit(1);
  }

  const list1 = loadList(file1);
  const list2 = loadList(file2);
  const result = findUniqueItems(list1, list2, "id");

  console.log("=== COMPARISON RESULTS ===\n");
  console.log("Summary:");
  console.log(result.summary);

  console.log(`\n--- Only in ${file1} ---`);
  console.log(result.onlyInList1.length > 0
    ? JSON.stringify(result.onlyInList1.map(x => x["auPairNumber"] ?? x["id"]), null, 2)
    : "None");

  console.log(`\n--- Only in ${file2} ---`);
  console.log(result.onlyInList2.length > 0
    ? JSON.stringify(result.onlyInList2.map(x => x["auPairNumber"] ?? x["id"]), null, 2)
    : "None");
}
