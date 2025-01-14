
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-13 18:00:00", "b": 409.0}, {"a": "2025-01-13 18:05:00", "b": 421.0}, {"a": "2025-01-13 18:10:00", "b": 471.8}, {"a": "2025-01-13 18:15:00", "b": 492.0}, {"a": "2025-01-13 18:20:00", "b": 455.0}, {"a": "2025-01-13 18:25:00", "b": 442.8}, {"a": "2025-01-13 18:30:00", "b": 461.6}, {"a": "2025-01-13 18:35:00", "b": 504.8}, {"a": "2025-01-13 18:40:00", "b": 525.0}, {"a": "2025-01-13 18:45:00", "b": 529.3333333333334}, {"a": "2025-01-13 18:50:00", "b": 540.5}, {"a": "2025-01-13 18:55:00", "b": 556.2}, {"a": "2025-01-13 19:00:00", "b": 554.8}, {"a": "2025-01-13 19:05:00", "b": 558.0}, {"a": "2025-01-13 19:15:00", "b": 637.0}, {"a": "2025-01-13 19:20:00", "b": 677.0}, {"a": "2025-01-13 19:25:00", "b": 696.0}, {"a": "2025-01-13 19:30:00", "b": 723.8}, {"a": "2025-01-13 19:35:00", "b": 745.25}, {"a": "2025-01-13 19:40:00", "b": 759.75}, {"a": "2025-01-13 19:45:00", "b": 780.75}, {"a": "2025-01-13 19:50:00", "b": 804.0}, {"a": "2025-01-13 19:55:00", "b": 831.4}, {"a": "2025-01-13 20:00:00", "b": 853.0}, {"a": "2025-01-13 20:05:00", "b": 862.0}, {"a": "2025-01-13 20:10:00", "b": 865.0}, {"a": "2025-01-13 20:15:00", "b": 888.6}, {"a": "2025-01-13 20:20:00", "b": 913.8}, {"a": "2025-01-13 20:25:00", "b": 951.8}, {"a": "2025-01-13 20:30:00", "b": 1015.6}, {"a": "2025-01-13 20:35:00", "b": 1044.0}, {"a": "2025-01-13 20:40:00", "b": 1007.8}, {"a": "2025-01-13 20:45:00", "b": 963.6}, {"a": "2025-01-13 20:50:00", "b": 1012.8}, {"a": "2025-01-13 20:55:00", "b": 1063.2}, {"a": "2025-01-13 21:00:00", "b": 1019.8}, {"a": "2025-01-13 21:05:00", "b": 975.25}, {"a": "2025-01-13 21:10:00", "b": 988.75}, {"a": "2025-01-13 21:15:00", "b": 590.25}, {"a": "2025-01-13 21:20:00", "b": 940.4}, {"a": "2025-01-13 21:25:00", "b": 938.8}, {"a": "2025-01-13 21:30:00", "b": 927.6}, {"a": "2025-01-13 21:35:00", "b": 912.2}, {"a": "2025-01-13 21:40:00", "b": 894.4}, {"a": "2025-01-13 21:45:00", "b": 886.5}, {"a": "2025-01-13 21:50:00", "b": 869.6666666666666}, {"a": "2025-01-13 21:55:00", "b": 852.0}, {"a": "2025-01-13 22:00:00", "b": 861.4}, {"a": "2025-01-13 22:05:00", "b": 856.4}, {"a": "2025-01-13 22:10:00", "b": 841.8}, {"a": "2025-01-13 22:15:00", "b": 856.0}, {"a": "2025-01-13 22:40:00", "b": 585.5}, {"a": "2025-01-13 22:45:00", "b": 591.5}, {"a": "2025-01-13 22:50:00", "b": 600.0}, {"a": "2025-01-13 22:55:00", "b": 603.8}, {"a": "2025-01-13 23:00:00", "b": 618.75}, {"a": "2025-01-13 23:05:00", "b": 613.75}, {"a": "2025-01-13 23:10:00", "b": 625.0}, {"a": "2025-01-13 23:15:00", "b": 619.8}, {"a": "2025-01-13 23:20:00", "b": 616.6}, {"a": "2025-01-13 23:25:00", "b": 619.2}, {"a": "2025-01-13 23:30:00", "b": 608.6}, {"a": "2025-01-13 23:35:00", "b": 619.2}, {"a": "2025-01-13 23:40:00", "b": 610.5}, {"a": "2025-01-13 23:45:00", "b": 609.0}, {"a": "2025-01-13 23:50:00", "b": 607.6}, {"a": "2025-01-13 23:55:00", "b": 615.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    