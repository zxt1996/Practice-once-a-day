int comp(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}

int findContentChildren(int* g, int gSize, int* s, int sSize){
    qsort(g, gSize, sizeof(int), comp);
    qsort(s, sSize, sizeof(int), comp);

    int res = 0, i = 0, j = 0;

    while (i < gSize && j < sSize) {
        if (g[i] <= s[j]) {
            i++;
            j++;
            res += 1;
        } else {
            i++;
        }
    }

    return res;
}