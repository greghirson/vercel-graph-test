
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-30 07:00:00", "b": 624.6}, {"a": "2025-03-30 07:05:00", "b": 630.5}, {"a": "2025-03-30 07:10:00", "b": 636.4}, {"a": "2025-03-30 07:15:00", "b": 640.6}, {"a": "2025-03-30 07:20:00", "b": 644.0}, {"a": "2025-03-30 07:25:00", "b": 617.6}, {"a": "2025-03-30 07:30:00", "b": 617.2}, {"a": "2025-03-30 07:35:00", "b": 629.25}, {"a": "2025-03-30 07:40:00", "b": 641.2}, {"a": "2025-03-30 07:45:00", "b": 643.75}, {"a": "2025-03-30 07:50:00", "b": 649.2}, {"a": "2025-03-30 07:55:00", "b": 664.75}, {"a": "2025-03-30 08:00:00", "b": 667.6}, {"a": "2025-03-30 08:05:00", "b": 663.25}, {"a": "2025-03-30 08:10:00", "b": 666.6666666666666}, {"a": "2025-03-30 08:15:00", "b": 691.2}, {"a": "2025-03-30 08:20:00", "b": 777.8}, {"a": "2025-03-30 08:25:00", "b": 791.5}, {"a": "2025-03-30 08:30:00", "b": 830.2}, {"a": "2025-03-30 08:35:00", "b": 809.75}, {"a": "2025-03-30 08:40:00", "b": 799.25}, {"a": "2025-03-30 08:45:00", "b": 801.4}, {"a": "2025-03-30 08:50:00", "b": 810.4}, {"a": "2025-03-30 08:55:00", "b": 831.2}, {"a": "2025-03-30 09:00:00", "b": 851.6}, {"a": "2025-03-30 09:05:00", "b": 859.2}, {"a": "2025-03-30 09:10:00", "b": 871.0}, {"a": "2025-03-30 09:15:00", "b": 924.6}, {"a": "2025-03-30 09:20:00", "b": 966.0}, {"a": "2025-03-30 09:25:00", "b": 936.5}, {"a": "2025-03-30 09:30:00", "b": 960.2}, {"a": "2025-03-30 09:35:00", "b": 980.8}, {"a": "2025-03-30 09:40:00", "b": 975.2}, {"a": "2025-03-30 09:45:00", "b": 971.75}, {"a": "2025-03-30 09:50:00", "b": 1027.0}, {"a": "2025-03-30 09:55:00", "b": 983.4}, {"a": "2025-03-30 10:00:00", "b": 933.8}, {"a": "2025-03-30 10:05:00", "b": 927.75}, {"a": "2025-03-30 10:10:00", "b": 910.6}, {"a": "2025-03-30 10:15:00", "b": 873.5}, {"a": "2025-03-30 10:20:00", "b": 885.4}, {"a": "2025-03-30 10:25:00", "b": 892.0}, {"a": "2025-03-30 10:30:00", "b": 889.8}, {"a": "2025-03-30 10:35:00", "b": 893.0}, {"a": "2025-03-30 10:40:00", "b": 905.25}, {"a": "2025-03-30 10:45:00", "b": 916.5}, {"a": "2025-03-30 10:50:00", "b": 938.4}, {"a": "2025-03-30 10:55:00", "b": 935.0}, {"a": "2025-03-30 11:00:00", "b": 942.4}, {"a": "2025-03-30 11:05:00", "b": 950.2}, {"a": "2025-03-30 11:10:00", "b": 940.8}, {"a": "2025-03-30 11:15:00", "b": 935.0}, {"a": "2025-03-30 11:20:00", "b": 916.4}, {"a": "2025-03-30 11:25:00", "b": 894.75}, {"a": "2025-03-30 11:30:00", "b": 902.4}, {"a": "2025-03-30 11:35:00", "b": 886.0}, {"a": "2025-03-30 11:40:00", "b": 873.6}, {"a": "2025-03-30 11:45:00", "b": 888.0}, {"a": "2025-03-30 11:50:00", "b": 881.8}, {"a": "2025-03-30 11:55:00", "b": 911.4}, {"a": "2025-03-30 12:00:00", "b": 936.0}, {"a": "2025-03-30 12:05:00", "b": 921.0}, {"a": "2025-03-30 12:10:00", "b": 878.4}, {"a": "2025-03-30 12:15:00", "b": 871.8}, {"a": "2025-03-30 12:20:00", "b": 899.5}, {"a": "2025-03-30 12:25:00", "b": 866.0}, {"a": "2025-03-30 12:30:00", "b": 848.4}, {"a": "2025-03-30 12:35:00", "b": 876.2}, {"a": "2025-03-30 12:40:00", "b": 858.75}, {"a": "2025-03-30 12:45:00", "b": 847.6}, {"a": "2025-03-30 12:50:00", "b": 862.25}, {"a": "2025-03-30 12:55:00", "b": 828.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    