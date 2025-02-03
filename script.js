
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-02 19:00:00", "b": 896.5}, {"a": "2025-02-02 19:05:00", "b": 895.25}, {"a": "2025-02-02 19:10:00", "b": 904.75}, {"a": "2025-02-02 19:15:00", "b": 900.0}, {"a": "2025-02-02 19:20:00", "b": 890.8}, {"a": "2025-02-02 19:25:00", "b": 884.6}, {"a": "2025-02-02 19:30:00", "b": 886.0}, {"a": "2025-02-02 19:35:00", "b": 889.8}, {"a": "2025-02-02 19:40:00", "b": 892.6}, {"a": "2025-02-02 19:45:00", "b": 879.2}, {"a": "2025-02-02 19:50:00", "b": 882.2}, {"a": "2025-02-02 19:55:00", "b": 864.8}, {"a": "2025-02-02 20:00:00", "b": 859.6}, {"a": "2025-02-02 20:05:00", "b": 872.0}, {"a": "2025-02-02 20:10:00", "b": 867.4}, {"a": "2025-02-02 20:15:00", "b": 862.6666666666666}, {"a": "2025-02-02 20:20:00", "b": 866.3333333333334}, {"a": "2025-02-02 20:25:00", "b": 872.0}, {"a": "2025-02-02 20:30:00", "b": 875.8}, {"a": "2025-02-02 20:35:00", "b": 891.2}, {"a": "2025-02-02 20:40:00", "b": 871.25}, {"a": "2025-02-02 20:45:00", "b": 797.4}, {"a": "2025-02-02 20:50:00", "b": 786.6666666666666}, {"a": "2025-02-02 20:55:00", "b": 779.8}, {"a": "2025-02-02 21:00:00", "b": 783.6}, {"a": "2025-02-02 21:05:00", "b": 776.8}, {"a": "2025-02-02 21:10:00", "b": 807.6}, {"a": "2025-02-02 21:15:00", "b": 827.25}, {"a": "2025-02-02 21:20:00", "b": 841.8}, {"a": "2025-02-02 21:25:00", "b": 845.8}, {"a": "2025-02-02 21:30:00", "b": 825.0}, {"a": "2025-02-02 21:35:00", "b": 809.4}, {"a": "2025-02-02 21:40:00", "b": 784.8}, {"a": "2025-02-02 21:45:00", "b": 780.0}, {"a": "2025-02-02 21:50:00", "b": 775.6}, {"a": "2025-02-02 21:55:00", "b": 767.0}, {"a": "2025-02-02 22:00:00", "b": 768.75}, {"a": "2025-02-02 22:05:00", "b": 753.2}, {"a": "2025-02-02 22:10:00", "b": 756.2}, {"a": "2025-02-02 22:15:00", "b": 745.8}, {"a": "2025-02-02 22:20:00", "b": 736.4}, {"a": "2025-02-02 22:25:00", "b": 730.8}, {"a": "2025-02-02 22:30:00", "b": 720.75}, {"a": "2025-02-02 22:35:00", "b": 730.6}, {"a": "2025-02-02 22:40:00", "b": 742.4}, {"a": "2025-02-02 22:45:00", "b": 729.6}, {"a": "2025-02-02 22:50:00", "b": 724.8}, {"a": "2025-02-02 22:55:00", "b": 720.0}, {"a": "2025-02-02 23:00:00", "b": 699.4}, {"a": "2025-02-02 23:05:00", "b": 701.8}, {"a": "2025-02-02 23:10:00", "b": 709.6}, {"a": "2025-02-02 23:15:00", "b": 705.3333333333334}, {"a": "2025-02-02 23:20:00", "b": 690.75}, {"a": "2025-02-02 23:25:00", "b": 691.75}, {"a": "2025-02-02 23:30:00", "b": 680.5}, {"a": "2025-02-02 23:35:00", "b": 675.0}, {"a": "2025-02-02 23:40:00", "b": 666.0}, {"a": "2025-02-02 23:45:00", "b": 670.0}, {"a": "2025-02-02 23:50:00", "b": 667.4}, {"a": "2025-02-02 23:55:00", "b": 663.8}, {"a": "2025-02-03 00:00:00", "b": 659.8}, {"a": "2025-02-03 00:05:00", "b": 653.6}, {"a": "2025-02-03 00:10:00", "b": 646.4}, {"a": "2025-02-03 00:15:00", "b": 648.5}, {"a": "2025-02-03 00:20:00", "b": 643.8}, {"a": "2025-02-03 00:25:00", "b": 637.6}, {"a": "2025-02-03 00:30:00", "b": 631.25}, {"a": "2025-02-03 00:35:00", "b": 632.0}, {"a": "2025-02-03 00:40:00", "b": 620.0}, {"a": "2025-02-03 00:45:00", "b": 605.2}, {"a": "2025-02-03 00:50:00", "b": 608.6}, {"a": "2025-02-03 00:55:00", "b": 610.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    