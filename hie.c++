#include <iostream>
using namespace std;

int main()
{
	int n;
	cin>>n;
	int viruspower[n];

	for(int i=0;i<n;i++)
	{
		cin>>viruspower[i];
	}
	int sum = 0;
	for(int i=0;i<n;i++)
	{
		sum+=viruspower[i];
	}
	int sumofviruspower=0;
	for(int i=0;i<n;i++)
	{
		sumofviruspower +=viruspower[i]*(sum-viruspower[i]);
	}
	cout<<sumofviruspower;
	return 0;
}