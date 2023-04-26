#include<stdio.h>
#include <iostream>
int main()
{
    FILE* fpd = fopen("data.txt","r+");
    FILE* fpn = fopen("readfile1.txt", "w+");
    char buff[256];
    // while(fscanf(fpd, "%s", buff) != EOF) {
    //     // std::cout << "Ping" << std::endl;
    //     fprintf(fpn, "else if(i1==\"%s\")\nop1=\n", buff);

    // }
    while(fscanf(fpd, "%s", buff) != EOF) {
        // std::cout << "Ping" << std::endl;
        fprintf(fpn, "<option>%s</option>\n", buff);

    }
    fclose(fpd);
    
    fclose(fpn);
}