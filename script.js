
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-02 19:00:00", "b": 754.0}, {"a": "2025-04-02 19:05:00", "b": 785.75}, {"a": "2025-04-02 19:10:00", "b": 798.4}, {"a": "2025-04-02 19:15:00", "b": 821.5}, {"a": "2025-04-02 19:20:00", "b": 825.4}, {"a": "2025-04-02 19:25:00", "b": 847.0}, {"a": "2025-04-02 19:30:00", "b": 855.75}, {"a": "2025-04-02 19:35:00", "b": 857.4}, {"a": "2025-04-02 19:40:00", "b": 864.8}, {"a": "2025-04-02 19:45:00", "b": 865.8}, {"a": "2025-04-02 19:50:00", "b": 876.6}, {"a": "2025-04-02 19:55:00", "b": 892.0}, {"a": "2025-04-02 20:00:00", "b": 1005.4}, {"a": "2025-04-02 20:05:00", "b": 1073.0}, {"a": "2025-04-02 20:10:00", "b": 1043.2}, {"a": "2025-04-02 20:15:00", "b": 993.2}, {"a": "2025-04-02 20:20:00", "b": 998.25}, {"a": "2025-04-02 20:25:00", "b": 978.8}, {"a": "2025-04-02 20:30:00", "b": 967.75}, {"a": "2025-04-02 20:35:00", "b": 917.0}, {"a": "2025-04-02 20:40:00", "b": 885.75}, {"a": "2025-04-02 20:45:00", "b": 885.25}, {"a": "2025-04-02 20:50:00", "b": 887.4}, {"a": "2025-04-02 20:55:00", "b": 895.4}, {"a": "2025-04-02 21:00:00", "b": 892.0}, {"a": "2025-04-02 21:05:00", "b": 873.8}, {"a": "2025-04-02 21:10:00", "b": 866.0}, {"a": "2025-04-02 21:15:00", "b": 866.0}, {"a": "2025-04-02 21:20:00", "b": 869.4}, {"a": "2025-04-02 21:25:00", "b": 870.6}, {"a": "2025-04-02 21:30:00", "b": 884.0}, {"a": "2025-04-02 21:35:00", "b": 882.4}, {"a": "2025-04-02 21:40:00", "b": 871.5}, {"a": "2025-04-02 21:45:00", "b": 915.4}, {"a": "2025-04-02 21:50:00", "b": 980.0}, {"a": "2025-04-02 21:55:00", "b": 929.2}, {"a": "2025-04-02 22:00:00", "b": 943.75}, {"a": "2025-04-02 22:05:00", "b": 958.4}, {"a": "2025-04-02 22:10:00", "b": 976.4}, {"a": "2025-04-02 22:15:00", "b": 920.6}, {"a": "2025-04-02 22:20:00", "b": 918.2}, {"a": "2025-04-02 22:25:00", "b": 908.2}, {"a": "2025-04-02 22:30:00", "b": 902.25}, {"a": "2025-04-02 22:35:00", "b": 879.25}, {"a": "2025-04-02 22:40:00", "b": 880.4}, {"a": "2025-04-02 22:45:00", "b": 813.8}, {"a": "2025-04-02 22:50:00", "b": 773.25}, {"a": "2025-04-02 22:55:00", "b": 785.0}, {"a": "2025-04-02 23:00:00", "b": 808.6}, {"a": "2025-04-02 23:05:00", "b": 840.5}, {"a": "2025-04-02 23:10:00", "b": 803.6}, {"a": "2025-04-02 23:15:00", "b": 792.8}, {"a": "2025-04-02 23:20:00", "b": 788.6666666666666}, {"a": "2025-04-02 23:25:00", "b": 784.0}, {"a": "2025-04-02 23:30:00", "b": 777.0}, {"a": "2025-04-02 23:35:00", "b": 774.75}, {"a": "2025-04-02 23:40:00", "b": 767.4}, {"a": "2025-04-02 23:45:00", "b": 744.4}, {"a": "2025-04-02 23:50:00", "b": 744.5}, {"a": "2025-04-02 23:55:00", "b": 739.8}, {"a": "2025-04-03 00:00:00", "b": 747.8}, {"a": "2025-04-03 00:05:00", "b": 741.4}, {"a": "2025-04-03 00:10:00", "b": 718.5}, {"a": "2025-04-03 00:15:00", "b": 708.25}, {"a": "2025-04-03 00:20:00", "b": 723.2}, {"a": "2025-04-03 00:25:00", "b": 701.0}, {"a": "2025-04-03 00:30:00", "b": 703.0}, {"a": "2025-04-03 00:35:00", "b": 709.2}, {"a": "2025-04-03 00:40:00", "b": 687.0}, {"a": "2025-04-03 00:45:00", "b": 676.5}, {"a": "2025-04-03 00:50:00", "b": 648.25}, {"a": "2025-04-03 00:55:00", "b": 641.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    