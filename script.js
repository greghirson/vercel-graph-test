
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-11 18:00:00", "b": 529.4}, {"a": "2024-12-11 18:05:00", "b": 539.2}, {"a": "2024-12-11 18:10:00", "b": 567.2}, {"a": "2024-12-11 18:15:00", "b": 618.2}, {"a": "2024-12-11 18:20:00", "b": 700.2}, {"a": "2024-12-11 18:25:00", "b": 740.2}, {"a": "2024-12-11 18:30:00", "b": 770.6}, {"a": "2024-12-11 18:35:00", "b": 799.0}, {"a": "2024-12-11 18:40:00", "b": 811.6}, {"a": "2024-12-11 18:45:00", "b": 785.25}, {"a": "2024-12-11 18:50:00", "b": 795.2}, {"a": "2024-12-11 18:55:00", "b": 814.4}, {"a": "2024-12-11 19:00:00", "b": 832.4}, {"a": "2024-12-11 19:05:00", "b": 857.6}, {"a": "2024-12-11 19:10:00", "b": 883.8}, {"a": "2024-12-11 19:15:00", "b": 860.6}, {"a": "2024-12-11 19:20:00", "b": 777.2}, {"a": "2024-12-11 19:25:00", "b": 727.75}, {"a": "2024-12-11 19:30:00", "b": 741.8}, {"a": "2024-12-11 19:35:00", "b": 741.75}, {"a": "2024-12-11 19:40:00", "b": 743.8}, {"a": "2024-12-11 19:45:00", "b": 757.6}, {"a": "2024-12-11 19:50:00", "b": 762.4}, {"a": "2024-12-11 19:55:00", "b": 721.6}, {"a": "2024-12-11 20:00:00", "b": 717.25}, {"a": "2024-12-11 20:05:00", "b": 731.0}, {"a": "2024-12-11 20:10:00", "b": 734.0}, {"a": "2024-12-11 20:15:00", "b": 737.0}, {"a": "2024-12-11 20:20:00", "b": 732.4}, {"a": "2024-12-11 20:25:00", "b": 1130.8}, {"a": "2024-12-11 20:30:00", "b": 1211.2}, {"a": "2024-12-11 20:35:00", "b": 1289.6}, {"a": "2024-12-11 20:40:00", "b": 1214.4}, {"a": "2024-12-11 20:45:00", "b": 782.6}, {"a": "2024-12-11 20:50:00", "b": 811.8}, {"a": "2024-12-11 20:55:00", "b": 862.6}, {"a": "2024-12-11 21:00:00", "b": 893.6}, {"a": "2024-12-11 21:05:00", "b": 866.0}, {"a": "2024-12-11 21:10:00", "b": 861.0}, {"a": "2024-12-11 21:15:00", "b": 893.0}, {"a": "2024-12-11 21:20:00", "b": 928.8}, {"a": "2024-12-11 21:25:00", "b": 883.0}, {"a": "2024-12-11 21:30:00", "b": 991.6}, {"a": "2024-12-11 21:35:00", "b": 904.2}, {"a": "2024-12-11 21:40:00", "b": 882.6}, {"a": "2024-12-11 21:45:00", "b": 978.4}, {"a": "2024-12-11 21:50:00", "b": 998.6}, {"a": "2024-12-11 21:55:00", "b": 1027.0}, {"a": "2024-12-11 22:00:00", "b": 944.6}, {"a": "2024-12-11 22:05:00", "b": 920.4}, {"a": "2024-12-11 22:10:00", "b": 855.8}, {"a": "2024-12-11 22:15:00", "b": 877.4}, {"a": "2024-12-11 22:20:00", "b": 1151.4}, {"a": "2024-12-11 22:25:00", "b": 1224.8}, {"a": "2024-12-11 22:30:00", "b": 1394.2}, {"a": "2024-12-11 22:35:00", "b": 846.4}, {"a": "2024-12-11 22:40:00", "b": 670.0}, {"a": "2024-12-11 22:45:00", "b": 919.4}, {"a": "2024-12-11 22:50:00", "b": 1831.4}, {"a": "2024-12-11 22:55:00", "b": 1161.2}, {"a": "2024-12-11 23:00:00", "b": 1214.2}, {"a": "2024-12-11 23:05:00", "b": 1048.6}, {"a": "2024-12-11 23:10:00", "b": 686.8}, {"a": "2024-12-11 23:15:00", "b": 648.0}, {"a": "2024-12-11 23:20:00", "b": 644.4}, {"a": "2024-12-11 23:25:00", "b": 632.75}, {"a": "2024-12-11 23:30:00", "b": 626.75}, {"a": "2024-12-11 23:35:00", "b": 617.5}, {"a": "2024-12-11 23:40:00", "b": 619.25}, {"a": "2024-12-11 23:45:00", "b": 616.2}, {"a": "2024-12-11 23:50:00", "b": 617.0}, {"a": "2024-12-11 23:55:00", "b": 609.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    