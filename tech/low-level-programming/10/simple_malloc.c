#include <stdlib.h>

int main(void) {
    int* array;

    array = malloc(10 * sizeof(int));

    free(array);

    return 0;
}
