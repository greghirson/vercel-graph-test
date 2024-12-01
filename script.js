
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-01 00:00:00", "b": 2160.2}, {"a": "2024-12-01 00:05:00", "b": 836.8}, {"a": "2024-12-01 00:10:00", "b": 849.4}, {"a": "2024-12-01 00:15:00", "b": 849.2}, {"a": "2024-12-01 00:20:00", "b": 940.6}, {"a": "2024-12-01 00:25:00", "b": 3351.4}, {"a": "2024-12-01 00:30:00", "b": 3119.4}, {"a": "2024-12-01 00:35:00", "b": 2949.6}, {"a": "2024-12-01 00:40:00", "b": 3007.8}, {"a": "2024-12-01 00:45:00", "b": 2929.2}, {"a": "2024-12-01 00:50:00", "b": 2850.2}, {"a": "2024-12-01 00:55:00", "b": 2772.8}, {"a": "2024-12-01 01:00:00", "b": 2453.6}, {"a": "2024-12-01 01:05:00", "b": 2865.25}, {"a": "2024-12-01 01:10:00", "b": 2856.8}, {"a": "2024-12-01 01:15:00", "b": 2725.6}, {"a": "2024-12-01 01:20:00", "b": 2650.8}, {"a": "2024-12-01 01:25:00", "b": 2859.0}, {"a": "2024-12-01 01:30:00", "b": 2988.6}, {"a": "2024-12-01 01:35:00", "b": 4109.2}, {"a": "2024-12-01 01:40:00", "b": 4498.0}, {"a": "2024-12-01 01:45:00", "b": 3750.8}, {"a": "2024-12-01 01:50:00", "b": 1115.2}, {"a": "2024-12-01 01:55:00", "b": 1344.4}, {"a": "2024-12-01 02:00:00", "b": 1004.8}, {"a": "2024-12-01 02:05:00", "b": 905.0}, {"a": "2024-12-01 02:10:00", "b": 903.4}, {"a": "2024-12-01 02:15:00", "b": 902.4}, {"a": "2024-12-01 02:20:00", "b": 886.5}, {"a": "2024-12-01 02:25:00", "b": 914.0}, {"a": "2024-12-01 02:30:00", "b": 919.4}, {"a": "2024-12-01 02:35:00", "b": 934.4}, {"a": "2024-12-01 02:40:00", "b": 948.8}, {"a": "2024-12-01 02:45:00", "b": 940.8}, {"a": "2024-12-01 02:50:00", "b": 897.4}, {"a": "2024-12-01 02:55:00", "b": 836.4}, {"a": "2024-12-01 03:00:00", "b": 759.8}, {"a": "2024-12-01 03:05:00", "b": 776.4}, {"a": "2024-12-01 03:10:00", "b": 752.2}, {"a": "2024-12-01 03:15:00", "b": 751.2}, {"a": "2024-12-01 03:20:00", "b": 707.75}, {"a": "2024-12-01 03:25:00", "b": 786.4}, {"a": "2024-12-01 03:30:00", "b": 1320.4}, {"a": "2024-12-01 03:35:00", "b": 4090.2}, {"a": "2024-12-01 03:40:00", "b": 3569.8}, {"a": "2024-12-01 03:45:00", "b": 2732.0}, {"a": "2024-12-01 03:50:00", "b": 2569.0}, {"a": "2024-12-01 03:55:00", "b": 2386.2}, {"a": "2024-12-01 04:00:00", "b": 2241.6}, {"a": "2024-12-01 04:05:00", "b": 2309.4}, {"a": "2024-12-01 04:10:00", "b": 2210.8}, {"a": "2024-12-01 04:15:00", "b": 2120.6}, {"a": "2024-12-01 04:20:00", "b": 2221.4}, {"a": "2024-12-01 04:25:00", "b": 2165.8}, {"a": "2024-12-01 04:30:00", "b": 2044.8}, {"a": "2024-12-01 04:35:00", "b": 2168.4}, {"a": "2024-12-01 04:40:00", "b": 2261.0}, {"a": "2024-12-01 04:45:00", "b": 2551.8}, {"a": "2024-12-01 04:50:00", "b": 2416.5}, {"a": "2024-12-01 04:55:00", "b": 2360.0}, {"a": "2024-12-01 05:00:00", "b": 2236.8}, {"a": "2024-12-01 05:05:00", "b": 2231.2}, {"a": "2024-12-01 05:10:00", "b": 2429.0}, {"a": "2024-12-01 05:15:00", "b": 2196.2}, {"a": "2024-12-01 05:20:00", "b": 2064.4}, {"a": "2024-12-01 05:25:00", "b": 2186.4}, {"a": "2024-12-01 05:30:00", "b": 2498.4}, {"a": "2024-12-01 05:35:00", "b": 2711.8}, {"a": "2024-12-01 05:40:00", "b": 2678.2}, {"a": "2024-12-01 05:45:00", "b": 2659.8}, {"a": "2024-12-01 05:50:00", "b": 2725.0}, {"a": "2024-12-01 05:55:00", "b": 2669.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    