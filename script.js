
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-20 05:20:00", "b": 724.3333333333334}, {"a": "2024-10-20 05:25:00", "b": 727.25}, {"a": "2024-10-20 05:30:00", "b": 723.0}, {"a": "2024-10-20 05:35:00", "b": 729.5}, {"a": "2024-10-20 05:40:00", "b": 729.8}, {"a": "2024-10-20 05:45:00", "b": 726.2}, {"a": "2024-10-20 05:50:00", "b": 720.2}, {"a": "2024-10-20 05:55:00", "b": 717.5}, {"a": "2024-10-20 06:00:00", "b": 733.2}, {"a": "2024-10-20 06:05:00", "b": 726.8}, {"a": "2024-10-20 06:10:00", "b": 721.8}, {"a": "2024-10-20 06:15:00", "b": 723.0}, {"a": "2024-10-20 06:20:00", "b": 717.8}, {"a": "2024-10-20 06:25:00", "b": 708.8}, {"a": "2024-10-20 06:30:00", "b": 723.6}, {"a": "2024-10-20 06:35:00", "b": 729.3333333333334}, {"a": "2024-10-20 06:40:00", "b": 725.2}, {"a": "2024-10-20 06:45:00", "b": 717.75}, {"a": "2024-10-20 06:50:00", "b": 713.2}, {"a": "2024-10-20 06:55:00", "b": 724.0}, {"a": "2024-10-20 07:00:00", "b": 722.6}, {"a": "2024-10-20 07:05:00", "b": 714.4}, {"a": "2024-10-20 07:10:00", "b": 707.4}, {"a": "2024-10-20 07:15:00", "b": 719.5}, {"a": "2024-10-20 07:20:00", "b": 725.0}, {"a": "2024-10-20 07:25:00", "b": 718.0}, {"a": "2024-10-20 07:30:00", "b": 706.0}, {"a": "2024-10-20 07:35:00", "b": 714.0}, {"a": "2024-10-20 07:40:00", "b": 710.5}, {"a": "2024-10-20 07:45:00", "b": 699.6}, {"a": "2024-10-20 07:50:00", "b": 714.0}, {"a": "2024-10-20 07:55:00", "b": 711.2}, {"a": "2024-10-20 08:00:00", "b": 711.25}, {"a": "2024-10-20 08:05:00", "b": 714.8}, {"a": "2024-10-20 08:10:00", "b": 716.5}, {"a": "2024-10-20 08:15:00", "b": 728.8}, {"a": "2024-10-20 08:20:00", "b": 738.6}, {"a": "2024-10-20 08:25:00", "b": 748.2}, {"a": "2024-10-20 08:30:00", "b": 748.0}, {"a": "2024-10-20 08:35:00", "b": 742.2}, {"a": "2024-10-20 08:40:00", "b": 743.4}, {"a": "2024-10-20 08:45:00", "b": 755.25}, {"a": "2024-10-20 08:50:00", "b": 764.0}, {"a": "2024-10-20 08:55:00", "b": 761.4}, {"a": "2024-10-20 09:00:00", "b": 748.6}, {"a": "2024-10-20 09:05:00", "b": 731.3333333333334}, {"a": "2024-10-20 09:10:00", "b": 702.4}, {"a": "2024-10-20 09:15:00", "b": 669.6}, {"a": "2024-10-20 09:20:00", "b": 646.6}, {"a": "2024-10-20 09:25:00", "b": 598.2}, {"a": "2024-10-20 09:30:00", "b": 575.0}, {"a": "2024-10-20 09:35:00", "b": 574.4}, {"a": "2024-10-20 09:40:00", "b": 563.25}, {"a": "2024-10-20 09:45:00", "b": 563.2}, {"a": "2024-10-20 09:50:00", "b": 562.6}, {"a": "2024-10-20 09:55:00", "b": 574.4}, {"a": "2024-10-20 10:00:00", "b": 606.6}, {"a": "2024-10-20 10:05:00", "b": 643.6}, {"a": "2024-10-20 10:10:00", "b": 683.0}, {"a": "2024-10-20 10:15:00", "b": 737.4}, {"a": "2024-10-20 10:20:00", "b": 777.6}, {"a": "2024-10-20 10:25:00", "b": 775.0}, {"a": "2024-10-20 10:30:00", "b": 753.2}, {"a": "2024-10-20 10:35:00", "b": 756.4}, {"a": "2024-10-20 10:40:00", "b": 732.4}, {"a": "2024-10-20 10:45:00", "b": 695.2}, {"a": "2024-10-20 10:50:00", "b": 674.6}, {"a": "2024-10-20 10:55:00", "b": 674.25}, {"a": "2024-10-20 11:00:00", "b": 658.25}, {"a": "2024-10-20 11:05:00", "b": 654.6666666666666}, {"a": "2024-10-20 11:10:00", "b": 661.4}, {"a": "2024-10-20 11:15:00", "b": 673.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    